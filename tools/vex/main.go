package main

import (
	"encoding/json"
	"fmt"
	"os"
)

const outputFile = "node.openvex.json"

func main() {
	coreVulns, err := LoadVulnerabilities("../../vuln/core/index.json")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to load core vulnerabilities: %v\n", err)
		os.Exit(1)
	}

	npmVulns, err := LoadVulnerabilities("../../vuln/npm/index.json")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to load npm vulnerabilities: %v\n", err)
		os.Exit(1)
	}

	depsVulns, err := LoadVulnerabilities("../../vuln/deps/index.json")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Warning: Failed to load deps vulnerabilities: %v\n", err)
		depsVulns = make(map[string]VulnEntry)
	}

	doc, err := GenerateVEXDocument("Node.js Security WG", "Project")
	if err != nil {
		fmt.Fprintf(os.Stderr, "Error generating VEX: %v\n", err)
		os.Exit(1)
	}

	doc.GenerateCanonicalID()

	fmt.Println("Validating OpenVEX spec compliance...")
	if err := ValidateVEX(doc); err != nil {
		fmt.Fprintf(os.Stderr, "OpenVEX validation failed: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("Validating against source vulnerability data...")
	if err := ValidateVEXAgainstSource(doc, coreVulns, npmVulns, depsVulns); err != nil {
		fmt.Fprintf(os.Stderr, "Source validation failed: %v\n", err)
		os.Exit(1)
	}

	fmt.Println("All validations passed!")

	file, err := os.Create(outputFile)
	if err != nil {
		fmt.Fprintf(os.Stderr, "Failed to create file: %v\n", err)
		os.Exit(1)
	}
	defer file.Close()

	encoder := json.NewEncoder(file)
	encoder.SetIndent("", "  ")

	if err := encoder.Encode(doc); err != nil {
		fmt.Fprintf(os.Stderr, "Failed to encode VEX: %v\n", err)
		os.Exit(1)
	}

	fmt.Printf("VEX document written to %s\n", outputFile)
}
