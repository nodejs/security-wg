// Validation checks:
// 1. OpenVEX spec compliance (structure, required fields, valid status values)
// 2. Source data accuracy (CVE existence, correct status, matching versions)
package main

import (
	"errors"
	"fmt"
	"strings"

	"github.com/openvex/go-vex/pkg/vex"
)

func ValidateVEX(doc *vex.VEX) error {
	if doc == nil {
		return errors.New("nil document")
	}
	if len(doc.Statements) == 0 {
		return errors.New("no statements present")
	}

	for i, s := range doc.Statements {
		if s.Vulnerability.ID == "" {
			return fmt.Errorf("statement %d missing vulnerability ID", i)
		}
		if len(s.Products) == 0 {
			return fmt.Errorf("statement %d has no products", i)
		}

		switch s.Status {
		case vex.StatusNotAffected, vex.StatusAffected, vex.StatusFixed, vex.StatusUnderInvestigation:
		default:
			return fmt.Errorf("statement %d has invalid status: %s", i, s.Status)
		}

		if err := validateStatementByStatus(&s, i); err != nil {
			return err
		}
	}

	return nil
}

func validateStatementByStatus(stmt *vex.Statement, index int) error {
	switch stmt.Status {
	case vex.StatusFixed:
		for _, p := range stmt.Products {
			if !strings.Contains(p.Component.ID, "@v") {
				return fmt.Errorf("statement %d: fixed status requires version-specific products, got: %s", index, p.Component.ID)
			}
		}

	case vex.StatusNotAffected:
		if stmt.Justification == "" && stmt.ImpactStatement == "" {
			return fmt.Errorf("statement %d: not_affected status requires justification or impact_statement", index)
		}
		// If a justification is provided, ensure it is a valid OpenVEX justification.
		if stmt.Justification != "" && !stmt.Justification.Valid() {
			return fmt.Errorf("statement %d: invalid justification value: %s", index, stmt.Justification)
		}
	}

	return nil
}

func ValidateVEXAgainstSource(doc *vex.VEX, coreVulns, npmVulns, depsVulns map[string]VulnEntry) error {
	cveToEntry := make(map[string]*VulnEntry)
	cveIsFromDeps := make(map[string]bool)

	for _, entry := range coreVulns {
		entryCopy := entry
		for _, cve := range entry.CVE {
			cveToEntry[cve] = &entryCopy
			cveIsFromDeps[cve] = false
		}
	}

	for _, entry := range npmVulns {
		entryCopy := entry
		for _, cve := range entry.CVE {
			cveToEntry[cve] = &entryCopy
			cveIsFromDeps[cve] = false
		}
	}

	for _, entry := range depsVulns {
		entryCopy := entry
		for _, cve := range entry.CVE {
			cveToEntry[cve] = &entryCopy
			cveIsFromDeps[cve] = true
		}
	}

	vexCVEs := make(map[string]bool)

	for i, stmt := range doc.Statements {
		cveName := string(stmt.Vulnerability.Name)
		vexCVEs[cveName] = true

		sourceEntry, exists := cveToEntry[cveName]
		if !exists {
			return fmt.Errorf("statement %d: CVE %s not found in source vulnerability data", i, cveName)
		}

		isFromDeps := cveIsFromDeps[cveName]

		if err := validateStatus(stmt, *sourceEntry, isFromDeps, i); err != nil {
			return err
		}

		if stmt.Status == vex.StatusFixed {
			if err := validateFixedProducts(stmt, *sourceEntry, i); err != nil {
				return err
			}
		}

		if stmt.Vulnerability.Description == "" {
			return fmt.Errorf("statement %d: missing vulnerability description for %s", i, cveName)
		}
	}

	for cve, entry := range cveToEntry {
		if !cveIsFromDeps[cve] && entry.Patched != "" {
			if !vexCVEs[cve] {
				return fmt.Errorf("missing VEX statement for patched vulnerability: %s", cve)
			}
		}
	}

	return nil
}

func validateStatus(stmt vex.Statement, source VulnEntry, isFromDeps bool, index int) error {
	if isFromDeps {
		if stmt.Status != vex.StatusNotAffected {
			return fmt.Errorf("statement %d: deps vulnerability should have not_affected status, got: %s", index, stmt.Status)
		}
	} else {
		if source.Patched != "" {
			if stmt.Status != vex.StatusFixed {
				return fmt.Errorf("statement %d: vulnerability with patches should have fixed status, got: %s", index, stmt.Status)
			}
		}
	}

	return nil
}

func validateFixedProducts(stmt vex.Statement, source VulnEntry, index int) error {
	expectedVersions := ExtractPatchedVersions(source.Patched)

	if len(stmt.Products) != len(expectedVersions) {
		return fmt.Errorf("statement %d: expected %d products (patched versions), got %d",
			index, len(expectedVersions), len(stmt.Products))
	}

	expectedMap := make(map[string]bool)
	for _, ver := range expectedVersions {
		expectedMap[ver] = true
	}

	for _, product := range stmt.Products {
		parts := strings.Split(product.Component.ID, "@")
		if len(parts) != 2 {
			return fmt.Errorf("statement %d: invalid product ID format: %s", index, product.Component.ID)
		}

		version := parts[1]
		if !expectedMap[version] {
			return fmt.Errorf("statement %d: unexpected version %s, not in patched list: %s",
				index, version, source.Patched)
		}
	}

	return nil
}
