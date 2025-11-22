# Node.js OpenVEX Generator

This tool produces a single OpenVEX document (`node.openvex.json`) covering:

* Node.js Core vulnerabilities (`vuln/core/index.json`).
* Bundled npm-related vulnerabilities (`vuln/npm/index.json`).
* Dependency that we believe do **not** affect Node.js (`vuln/deps/index.json`) - these are emitted with `status: not_affected`.

## Output

Run:

```
go run .
```

Generates `node.openvex.json`.

## Adding / Updating Vulnerabilities

1. Edit the appropriate index file under `vuln/`.
2. Run `go run .` to regenerate.

**Note:** Entries without a CVE ID are skipped and will not appear in the generated VEX document.

## Do Not Manually Edit Generated File

`node.openvex.json` is generated; modify source indices instead.
