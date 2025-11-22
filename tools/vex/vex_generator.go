package main

import (
	"encoding/json"
	"fmt"
	"os"
	"strings"
	"time"

	"github.com/openvex/go-vex/pkg/vex"
)

const (
	nodejsProductPURL = "pkg:nodejs/node"
	cveRecordBaseURL  = "https://www.cve.org/CVERecord"
)

// VulnEntry represents the structure of vulnerability entries in the index JSON files.
type VulnEntry struct {
	CVE                  []string `json:"cve"`
	Description          string   `json:"description"`
	Overview             string   `json:"overview"`
	Vulnerable           string   `json:"vulnerable"`
	Patched              string   `json:"patched"`
	Ref                  string   `json:"ref"`
	Severity             string   `json:"severity"`
	AffectedEnvironments []string `json:"affectedEnvironments"`
	Reason               string   `json:"reason"`
}

// ExtractPatchedVersions parses semver range strings from the patched field.
// Input like "^8.1.4 || ^7.10.1" returns ["v8.1.4", "v7.10.1"].
func ExtractPatchedVersions(patchedRange string) []string {
	if patchedRange == "" {
		return nil
	}

	var versions []string
	parts := strings.Split(patchedRange, "||")

	for _, part := range parts {
		part = strings.TrimSpace(part)
		if part == "" {
			continue
		}

		part = strings.TrimPrefix(part, "^")
		part = strings.TrimPrefix(part, "~")
		part = strings.TrimSpace(part)

		if part != "" {
			if !strings.HasPrefix(part, "v") {
				part = "v" + part
			}
			versions = append(versions, part)
		}
	}

	return versions
}

// CreateProductsForVersions builds VEX product entries from version strings.
func CreateProductsForVersions(versions []string) []vex.Product {
	products := make([]vex.Product, 0, len(versions))
	for _, ver := range versions {
		products = append(products, vex.Product{
			Component: vex.Component{
				ID: fmt.Sprintf("%s@%s", nodejsProductPURL, ver),
			},
		})
	}
	return products
}

// GenerateVEXDocument builds an OpenVEX document from vulnerability data in
// core, npm, and deps index files.
func GenerateVEXDocument(author, role string) (*vex.VEX, error) {
	doc := vex.New()
	doc.Author = author
	doc.AuthorRole = role
	now := time.Now().UTC()
	doc.Timestamp = &now

	fmt.Println("Loading core vulnerabilities...")
	coreVulns, err := LoadVulnerabilities("../../vuln/core/index.json")
	if err != nil {
		return nil, fmt.Errorf("load core vulns: %w", err)
	}

	fmt.Println("Loading npm vulnerabilities...")
	npmVulns, err := LoadVulnerabilities("../../vuln/npm/index.json")
	if err != nil {
		return nil, fmt.Errorf("load npm vulns: %w", err)
	}

	fmt.Println("Generating VEX statements...")
	if err := ProcessVulnerabilities(&doc, coreVulns); err != nil {
		return nil, fmt.Errorf("process core vulns: %w", err)
	}
	if err := ProcessVulnerabilities(&doc, npmVulns); err != nil {
		return nil, fmt.Errorf("process npm vulns: %w", err)
	}

	fmt.Println("Loading deps vulnerabilities...")
	depsVulns, err := LoadVulnerabilities("../../vuln/deps/index.json")
	if err == nil {
		if err := ProcessDepsVulnerabilities(&doc, depsVulns); err != nil {
			return nil, fmt.Errorf("process deps vulns: %w", err)
		}
	}

	fmt.Printf("Generated %d VEX statements\n", len(doc.Statements))
	return &doc, nil
}

// LoadVulnerabilities reads a JSON vulnerability index file.
func LoadVulnerabilities(path string) (map[string]VulnEntry, error) {
	f, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer f.Close()

	var vulns map[string]VulnEntry
	if err := json.NewDecoder(f).Decode(&vulns); err != nil {
		return nil, err
	}

	return vulns, nil
}

// ProcessVulnerabilities creates fixed-status VEX statements for patched vulnerabilities.
// Each statement includes the specific versions where the fix was released.
func ProcessVulnerabilities(doc *vex.VEX, vulns map[string]VulnEntry) error {
	for _, entry := range vulns {
		if len(entry.CVE) == 0 {
			continue
		}

		patchedVersions := ExtractPatchedVersions(entry.Patched)

		for _, cveID := range entry.CVE {
			vuln := vex.Vulnerability{
				Name:        vex.VulnerabilityID(cveID),
				Description: firstNonEmpty(entry.Overview, entry.Description),
			}
			if strings.HasPrefix(cveID, "CVE-") {
				vuln.ID = fmt.Sprintf("%s?id=%s", cveRecordBaseURL, cveID)
			}

			if len(patchedVersions) == 0 {
				return fmt.Errorf("vulnerability %s has no patched versions - all vulnerabilities must have fixes", cveID)
			}

			products := CreateProductsForVersions(patchedVersions)
			stmt := vex.Statement{
				Vulnerability: vuln,
				Products:      products,
				Status:        vex.StatusFixed,
			}

			doc.Statements = append(doc.Statements, stmt)
		}
	}

	return nil
}

// ProcessDepsVulnerabilities creates not_affected statements for dependency
// vulnerabilities that don't impact Node.js.
func ProcessDepsVulnerabilities(doc *vex.VEX, vulns map[string]VulnEntry) error {
	for id, entry := range vulns {
		if len(entry.CVE) == 0 {
			continue
		}

		if err := validateJustification(entry.Reason, id); err != nil {
			return err
		}

		for _, cveID := range entry.CVE {
			vuln := vex.Vulnerability{
				Name:        vex.VulnerabilityID(cveID),
				Description: firstNonEmpty(entry.Overview, entry.Description),
			}
			if strings.HasPrefix(cveID, "CVE-") {
				vuln.ID = fmt.Sprintf("%s?id=%s", cveRecordBaseURL, cveID)
			}

			justification := mapReasonToJustification(entry.Reason)

			stmt := vex.Statement{
				Vulnerability: vuln,
				Products: []vex.Product{
					{Component: vex.Component{ID: nodejsProductPURL}},
				},
				Status:        vex.StatusNotAffected,
				Justification: justification,
			}

			if entry.Overview != "" {
				stmt.ImpactStatement = entry.Overview
			}

			doc.Statements = append(doc.Statements, stmt)
		}
	}

	return nil
}

// mapReasonToJustification converts the reason field to OpenVEX justification.
func mapReasonToJustification(reason string) vex.Justification {
	return vex.Justification(reason)
}

// validateJustification checks if the reason is a valid OpenVEX justification
// using the VEX library's validation.
func validateJustification(reason, id string) error {
	justification := vex.Justification(reason)
	if !justification.Valid() {
		return fmt.Errorf("invalid justification '%s' in deps entry %s - must be a valid OpenVEX justification", reason, id)
	}
	return nil
}

func firstNonEmpty(vals ...string) string {
	for _, v := range vals {
		if v != "" {
			return v
		}
	}
	return ""
}
