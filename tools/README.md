# Security WG Tooling 

In this directory you can find several tooling that will aid in validating NSWG vulnerability reports and creating them.

## Validating NSWG Reports

`vuln_valid` ensures that a vulnerability report is structured according to NSWG guidelines and schema.
It is currently used as the lint tool when `npm test` is ran in the project's top-level directory and validates both NSWG Ecosystem as well as NSWG Core vulnerability formats.

Usage:

```bash
$ node tools/vuln_valid
```
