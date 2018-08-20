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
$ npm run reporter -- --reportId <h1-report-id>
```

Interactive-mode will kick in to prompt for the following NSWG report field which aren't fetched from HackerOne: NSWG Ecosystem Report ID, Vulnerable Versions, Patched Versions.

To use the reporter in automated environments such as a CI pass the `--silent` flag:

```bash
$ npm run reporter -- --silent --reportId <h1-report-id>
```

## CVE Submission Formatter

Turn a JSON formatted CVE report and prepare it for submission to Mitre via <https://cveform.mitre.org/>. This tool is intended primarily for core vulnerabilities, using the format used in vuln/core/.

One of the acceptable formats for submission takes the form:

```
[CVEID]: ...
[PRODUCT]: ...
[VERSION]: ...
[PROBLEMTYPE]: ...
[REFERENCES]: ...
[DESCRIPTION]: ...
[ASSIGNINGCNA]: ...
```

To turn a JSON object into this form for pasting to the Mitre form, run:

```bash
$ npm run cve_submission_format <path/to/cve.json>
```

You can also supply the report number in vuln/core/ and it will determine the file to use.

**It is important to update the "[VERSION]" to be human-readable**, such as "All versions of Node.js prior to 6.14.4, 8.11.4 and 10.9.0". This is not done by the tool for you.
