Check the official [report](https://bestpractices.coreinfrastructure.org/en/projects/29?criteria_level=2) as some questions include additional information that might be relevant to understand the context around the question.


# Basics
> What is the human-readable name of the project?

Node.js

> What is a brief description of the project?

Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine

> What is the URL for the project (as a whole)?

https://nodejs.org

> What is the URL for the version control repository (it may be the same as the project URL)?

https://github.com/nodejs/node

## Prerequisites

> The project MUST achieve a silver level badge.

**Met**


## Project oversight

> The project MUST have a "bus factor" of 2 or more. (URL required)

**Met**

> The project MUST have at least two unassociated significant contributors.

**Met**

## Other

> The project MUST include a copyright statement in each source file, identifying the copyright holder (e.g., the [project name] contributors).

**Unmet**

> The project MUST include a license statement in each source file. This MAY be done by including the following inside a comment near the beginning of each file: SPDX-License-Identifier: [SPDX license expression for project](https://spdx.dev/ids/#how)

**Unmet**

# Change Control

## Public version-controlled source repository

> The project's source repository MUST use a common distributed version control software (e.g., git or mercurial). 

**Met** 

> The project MUST clearly identify small tasks that can be performed by new or casual contributors. (URL required)

**Met**

> The project MUST require two-factor authentication (2FA) for developers for changing a central repository or accessing sensitive data (such as private vulnerability reports). This 2FA mechanism MAY use mechanisms without cryptographic mechanisms such as SMS, though that is not recommended.

_Possible answers: Met/Unmet_

> The project's two-factor authentication (2FA) SHOULD use cryptographic mechanisms to prevent impersonation. Short Message Service (SMS) based 2FA, by itself, does NOT meet this criterion, since it is not encrypted.

_Possible answers: Met/Unmet_

# Quality

## Coding standards

> The project MUST document its code review requirements, including how code review is conducted, what must be checked, and what is required to be acceptable. (URL required)

_Possible answers: Met/Unmet/NA_

> The project MUST have at least 50% of all proposed modifications reviewed before release by a person other than the author, to determine if it is a worthwhile modification and free of known issues which would argue against its inclusion

_Possible answers: Met/Unmet_

## Working build system

> The project MUST have a [reproducible build](https://reproducible-builds.org/). If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select "not applicable" (N/A). (URL required)

_Possible answers: Met/Unmet/NA_


## Automated test suite


> A test suite MUST be invocable in a standard way for that language.

_Possible answers: Met/Unmet_

> The project MUST implement continuous integration, where new or changed code is frequently integrated into a central code repository and automated tests are run on the result. 

**Met** 
https://ci.nodejs.org/

> The project MUST have FLOSS automated test suite(s) that provide at least 90% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language. 

_Possible answers: Met/Unmet/NA_

> The project MUST have FLOSS automated test suite(s) that provide at least 80% branch coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.

_Possible answers: Met/Unmet/NA_


# Security

## Use basic good cryptographic practices

_Note that some software does not need to use cryptographic mechanisms. If your project produces software that (1) includes, activates, or enables encryption functionality, and (2) might be released from the United States (US) to outside the US or to a non-US-citizen, you may be legally required to take a few extra steps. Typically this just involves sending an email. For more information, see the encryption section of [Understanding Open Source Technology & US Export Controls](https://www.linuxfoundation.org/resources/publications/understanding-us-export-controls-with-os-projects/)._

> The software produced by the project MUST support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 MUST be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select "not applicable" (N/A).

_Possible answers: Met/Unmet/NA_


> The software produced by the project MUST, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select "not applicable" (N/A).

_Possible answers: Met/Unmet/NA_



## Secured delivery against man-in-the-middle (MITM) attacks

> The project website, repository (if accessible via the web), and download site (if separate) MUST include key hardening headers with nonpermissive values. (URL required)

_Possible answers: Met/Unmet_

## Other security issues

> The project MUST have performed a security review within the last 5 years. This review MUST consider the security requirements and security boundary.

_Possible answers: Met/Unmet_

> Hardening mechanisms MUST be used in the software produced by the project so that software defects are less likely to result in security vulnerabilities. (URL required)

**N/A**


# Analysis

> The project MUST apply at least one dynamic analysis tool to any proposed major production release of the software produced by the project before its release.

**Unmet**
Infrastructure for running several different dynamic analysis tools is provided by the project. See: https://github.com/nodejs/node/tree/master/tools


> The project SHOULD include many run-time assertions in the software it produces and check those assertions during dynamic analysis.

_Possible answers: Met/Unmet/NA_
