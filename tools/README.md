# Security WG Tooling 

In this directory you can find several tooling that will aid in validating NSWG vulnerability reports and creating them.

## Validating NSWG Reports

`vuln_valid` ensures that a vulnerability report is structured according to NSWG guidelines and schema.
It is currently used as the lint tool when `npm test` is ran in the project's top-level directory and validates both NSWG Ecosystem as well as NSWG Core vulnerability formats.

Usage:

```bash
$ node tools/vuln_valid
```

## NSWG Vulnerability Report Creation

A common task for the Security WG members is to triage vulnerabilities and finally create a NSWG-ECO report that is PR'ed to [this repository](https://github.com/nodejs/security-wg) to maintain an open vulnerabilities database for the Node.js ecosystem.

The `reporter` is a CLI tool to fetch the report data from HackerOne and output a NSWG-compatible report format.

### Usage:

From the main repository directory, the reporter can be invoked as follows and will default to interactive mode:

```bash
$ npm run report -- --reportId <h1-report-id>
```

Interactive-mode will kick in to prompt for the following NSWG report field which aren't fetched from HackerOne: NSWG Ecosystem Report ID, Vulnerable Versions, Patched Versions.

To use the reporter in automated environments such as a CI pass the `--silent` flag:

```bash
$ npm run reporter -- --silent --reportId <h1-report-id>
```
