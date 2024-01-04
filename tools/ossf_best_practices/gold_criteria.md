Check the official [report](https://bestpractices.coreinfrastructure.org/en/projects/29?criteria_level=2) as some questions include additional information that might be relevant to understand the context around the question.


# Basics
> What is the human-readable name of the project?

_[Inherit from passing criteria](/tools/ossf_best_practices/passing_criteria.md)_

> What is a brief description of the project?

_[Inherit from passing criteria](/tools/ossf_best_practices/passing_criteria.md)_

> What is the URL for the project (as a whole)?

_[Inherit from passing criteria](/tools/ossf_best_practices/passing_criteria.md)_

> What is the URL for the version control repository (it may be the same as the project URL)?

_[Inherit from passing criteria](/tools/ossf_best_practices/passing_criteria.md)_

## Prerequisites

> The project MUST achieve a silver level badge.

**Met**

Context:
- [CII Best Practices: Basics](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-basics-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307380987)


## Project oversight

> The project MUST have a "bus factor" of 2 or more. (URL required)

**Met**

Context:
- [CII Best Practices: Basics](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-basics-1)
- [See related question in Silver Criteria](/tools/ossf_best_practices/silver_criteria.md)


> The project MUST have at least two unassociated significant contributors.

**Met**

Context:
- [CII Best Practices: Basics](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-basics-1)
- [CII Best Practices: Contributors Unassociated](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#contributors_unassociated)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307388569)

## Other

> The project MUST include a copyright statement in each source file, identifying the copyright holder (e.g., the [project name] contributors).

**Meet**

Context:
- [CII Best Practices: Basics](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-basics-1)
- [CII Best Practices: Copyright Per File](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#copyright_per_file)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307391551)

> The project MUST include a license statement in each source file. This MAY be done by including the following inside a comment near the beginning of each file: SPDX-License-Identifier: [SPDX license expression for project](https://spdx.dev/ids/#how)

**Unmet**

Context:
- [CII Best Practices: Basics](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-basics-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307392811)

# Change Control

## Public version-controlled source repository

> The project's source repository MUST use a common distributed version control software (e.g., git or mercurial). 

**Met** 

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-change-control-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307393521)

> The project MUST clearly identify small tasks that can be performed by new or casual contributors. (URL required)

**Met. For example https://github.com/nodejs/node/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-change-control-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307394640)

> The project MUST require two-factor authentication (2FA) for developers for changing a central repository or accessing sensitive data (such as private vulnerability reports). This 2FA mechanism MAY use mechanisms without cryptographic mechanisms such as SMS, though that is not recommended.

**Met**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-change-control-1)
- [CII Best Practices: Require 2FA](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#require_2FA)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307396475)

> The project's two-factor authentication (2FA) SHOULD use cryptographic mechanisms to prevent impersonation. Short Message Service (SMS) based 2FA, by itself, does NOT meet this criterion, since it is not encrypted.

**Met. We Use Github, so we follow the recommendations. Documentation: https://docs.github.com/en/authentication/securing-your-account-with-two-factor-authentication-2fa/about-two-factor-authentication**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-change-control-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307398661)

# Quality

## Coding standards

> The project MUST document its code review requirements, including how code review is conducted, what must be checked, and what is required to be acceptable. (URL required)

**Met. The process is documented: https://github.com/nodejs/node/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/doc/contributing/pull-requests.md#reviewing-pull-requests**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-quality-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307403399)

> The project MUST have at least 50% of all proposed modifications reviewed before release by a person other than the author, to determine if it is a worthwhile modification and free of known issues which would argue against its inclusion

**Met. Currently the repo is monitored against the OSSF Scorecard, where this is checked every 2 weeks in the Security Team regular meetings. See: https://github.com/nodejs/security-wg/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/tools/ossf_scorecard/report.md**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-quality-1)
- [CII Best Practices: Two Person Review](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#two_person_review)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307402095)


## Working build system

> The project MUST have a [reproducible build](https://reproducible-builds.org/). If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select "not applicable" (N/A). (URL required)

**Unmet**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-quality-1)


## Automated test suite


> A test suite MUST be invocable in a standard way for that language.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-quality-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307404137)

> The project MUST implement continuous integration, where new or changed code is frequently integrated into a central code repository and automated tests are run on the result. 

**Met. https://ci.nodejs.org/**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-quality-1)

> The project MUST have FLOSS automated test suite(s) that provide at least 90% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language. 

**Met. This is part of the CI Checks in place**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-quality-1)
- [CII Best Practices: Test Statement Coverage 90%](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#test_statement_coverage90)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307405014)

> The project MUST have FLOSS automated test suite(s) that provide at least 80% branch coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.

**Met. This is part of the CI Checks in place**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-quality-1)
- [CII Best Practices: Test Branch Coverage 80%](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#test_branch_coverage80)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307405888)


# Security

## Use basic good cryptographic practices

_Note that some software does not need to use cryptographic mechanisms. If your project produces software that (1) includes, activates, or enables encryption functionality, and (2) might be released from the United States (US) to outside the US or to a non-US-citizen, you may be legally required to take a few extra steps. Typically this just involves sending an email. For more information, see the encryption section of [Understanding Open Source Technology & US Export Controls](https://www.linuxfoundation.org/resources/publications/understanding-us-export-controls-with-os-projects/)._

> The software produced by the project MUST support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 MUST be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select "not applicable" (N/A).

**N/A**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-security-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307415866)
- [See related question in Silver Criteria](/tools/ossf_best_practices/silver_criteria.md)

> The software produced by the project MUST, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-security-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307415066)
- [See related question in Silver Criteria](/tools/ossf_best_practices/silver_criteria.md)


## Secured delivery against man-in-the-middle (MITM) attacks

> The project website, repository (if accessible via the web), and download site (if separate) MUST include key hardening headers with nonpermissive values. (URL required)

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-security-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307413951)

## Other security issues

> The project MUST have performed a security review within the last 5 years. This review MUST consider the security requirements and security boundary.

**Unmet**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-security-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307412553)

> Hardening mechanisms MUST be used in the software produced by the project so that software defects are less likely to result in security vulnerabilities. (URL required)

**N/A**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-security-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307407833)
- [See related question in Silver Criteria](/tools/ossf_best_practices/silver_criteria.md)


# Analysis

> The project MUST apply at least one dynamic analysis tool to any proposed major production release of the software produced by the project before its release.

**Unmet. Infrastructure for running several different dynamic analysis tools is provided by the project. See: https://github.com/nodejs/node/tree/master/tools**

Context:
- [CII Best Practices: Analysis](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-analysis-1)


> The project SHOULD include many run-time assertions in the software it produces and check those assertions during dynamic analysis.

**Unmet**

Context:
- [CII Best Practices: Analysis](https://github.com/coreinfrastructure/best-practices-badge/blob/a51ed45fdcd8e2959781a86929f561521ac2e0e0/docs/other.md#upgrade-analysis-1)
- [Team Discussion](https://github.com/nodejs/security-wg/pull/956#discussion_r1307406630)
