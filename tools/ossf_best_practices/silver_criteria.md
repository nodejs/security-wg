Check the official [report](https://bestpractices.coreinfrastructure.org/en/projects/29?criteria_level=1) as some questions include additional information that might be relevant to understand the context around the question.


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

> The project MUST achieve a passing level badge.

**Met**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)

## Basic project website content

> The information on how to contribute MUST include the requirements for acceptable contributions (e.g., a reference to any required coding standard). (URL required) 

**Met. https://github.com/nodejs/node/blob/master/CONTRIBUTING.md**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)

## Project oversight

> The project SHOULD have a legal mechanism where all developers of non-trivial amounts of project software assert that they are legally authorized to make these contributions. The most common and easily-implemented approach for doing this is by using a [Developer Certificate of Origin (DCO)](https://developercertificate.org/), where users add "signed-off-by" in their commits and the project links to the DCO website. However, this MAY be implemented as a Contributor License Agreement (CLA), or other legal mechanism. (URL required)

**Met. https://github.com/nodejs/node/blob/main/CONTRIBUTING.md#developers-certificate-of-origin**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)
- [CII Best Practices: DCO](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#dco)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196299388)

> The project MUST clearly define and document its project governance model (the way it makes decisions, including key roles). (URL required)

**Met. https://github.com/nodejs/node/blob/main/GOVERNANCE.md**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)
- [CII Best Practices: Governance](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#governance)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167971172)

> The project MUST adopt a code of conduct and post it in a standard location.

**Met. https://github.com/nodejs/node/blob/main/CODE_OF_CONDUCT.md**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167971312)

> The project MUST clearly define and publicly document the key roles in the project and their responsibilities, including any tasks those roles must perform. It MUST be clear who has which role(s), though this might not be documented in the same way. (URL required)

**Met. https://github.com/nodejs/node/blob/main/GOVERNANCE.md**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167971469)

> The project MUST be able to continue with minimal interruption if any one person dies, is incapacitated, or is otherwise unable or unwilling to continue support of the project. In particular, the project MUST be able to create and close issues, accept proposed changes, and release versions of software, within a week of confirmation of the loss of support from any one individual. This MAY be done by ensuring someone else has any necessary keys, passwords, and legal rights to continue the project. Individuals who run a FLOSS project MAY do this by providing keys in a lockbox and a will providing any needed legal rights (e.g., for DNS names).

**Met**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)
- [CII Best Practices: Access Continuity](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#access_continuity)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167971859)

> The project SHOULD have a "bus factor" of 2 or more. (URL required)

**Met. https://github.com/nodejs/node/blob/main/README.md#current-project-team-members**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#basics)
- [CII Best Practices: Bus Factor](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#bus_factor)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196290405)

## Documentation

> The project MUST have a documented roadmap that describes what the project intends to do and not do for at least the next year. (URL required)

**Met. https://github.com/nodejs/node/blob/HEAD/doc/contributing/strategic-initiatives.md**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239549706)

> The project MUST include documentation of the architecture (aka high-level design) of the software produced by the project. If the project does not produce software, select "not applicable" (N/A). (URL required)

**Met. https://github.com/nodejs/node/tree/main/doc/contributing**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239551179)

> The project MUST document what the user can and cannot expect in terms of security from the software produced by the project (its "security requirements"). (URL required)

**Met. https://github.com/nodejs/node/blob/main/SECURITY.md and https://github.com/nodejs/node/blob/main/SECURITY.md#the-nodejs-threat-model**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [CII Best Practices: Documentation Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation_security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167972353) and [also](https://github.com/nodejs/security-wg/pull/955#discussion_r1196302048)

> The project MUST provide a "quick start" guide for new users to help them quickly do something with the software. (URL required)

**Met. https://nodejs.dev/en/learn/**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [CII Best Practices: Documentation Quick Start](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation_quick_start)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167972463)

> The project MUST make an effort to keep the documentation consistent with the current version of the project results (including software produced by the project). Any known documentation defects making it inconsistent MUST be fixed. If the documentation is generally current, but erroneously includes some older information that is no longer true, just treat that as a defect, then track and fix as usual.

**Met**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239551716)

> The project repository front page and/or website MUST identify and hyperlink to any achievements, including this best practices badge, within 48 hours of public recognition that the achievement has been attained. (URL required) 

**Met. https://nodejs.org/en/about/security-reporting#openssf-best-practices**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196303302) and [also](https://github.com/nodejs/security-wg/pull/955#discussion_r1197593849)


## Accessibility and internationalization

> The project (both project sites and project results) SHOULD follow accessibility best practices so that persons with disabilities can still participate in the project and use the project results where it is reasonable to do so.

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [CII Best Practices: Accessibility Best Practices](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#accessibility_best_practices)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196296306)

**Met. Tested with automatic tools, but there is no dedicated team for accessibility.**

> The software produced by the project SHOULD be internationalized to enable easy localization for the target audience's culture, region, or language. If internationalization (i18n) does not apply (e.g., the software doesn't generate text intended for end-users and doesn't sort human-readable text), select "not applicable" (N/A)

**NA**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167972774)

## Other

> If the project sites (website, repository, and download URLs) store passwords for authentication of external users, the passwords MUST be stored as iterated hashes with a per-user salt by using a key stretching (iterated) algorithm (e.g., Argon2id, Bcrypt, Scrypt, or PBKDF2). If the project sites do not store passwords for this purpose, select "not applicable" (N/A).

**N/A**

Context:
- [CII Best Practices: Documentation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#documentation)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196306972)

# Change Control

## Previous versions

> The project MUST maintain the most often used older versions of the product or provide an upgrade path to newer versions. If the upgrade path is difficult, the project MUST document how to perform the upgrade (e.g., the interfaces that have changed and detailed suggested steps to help upgrade).

**Met. https://github.com/nodejs/release#release-schedule**

Context:
- [CII Best Practices: Change Control](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#change-control)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167973178) and [also](https://github.com/nodejs/security-wg/pull/955#discussion_r1197594518)


# Reporting

## Bug-reporting process

> The project MUST use an issue tracker for tracking individual issues. 

**Met. https://github.com/nodejs/node/issues**

Context:
- [CII Best Practices: Reporting](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#reporting)

## Vulnerability report process

> The project MUST give credit to the reporter(s) of all vulnerability reports resolved in the last 12 months, except for the reporter(s) who request anonymity. If there have been no vulnerabilities resolved in the last 12 months, select "not applicable" (N/A). (URL required)

**Met. https://hackerone.com/nodejs/hacktivity**

Context:
- [CII Best Practices: Reporting](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#reporting)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167973417) and [also](https://github.com/nodejs/security-wg/pull/955#discussion_r1197595061)

> The project MUST have a documented process for responding to vulnerability reports. (URL required)

**Met. https://github.com/nodejs/node/blob/main/SECURITY.md**

Context:
- [CII Best Practices: Reporting](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#reporting)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167973468)

# Quality

## Coding standards

> The project MUST identify the specific coding style guides for the primary languages it uses, and require that contributions generally comply with it. (URL required)

**Met. https://github.com/nodejs/node/blob/main/doc/contributing/cpp-style-guide.md**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [CII Best Practices: Coding Standards](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#coding_standards)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196312081)

> The project MUST automatically enforce its selected coding style(s) if there is at least one FLOSS tool that can do so in the selected language(s).

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196313029)

## Working build system

> Build systems for native binaries MUST honor the relevant compiler and linker (environment) variables passed in to them (e.g., CC, CFLAGS, CXX, CXXFLAGS, and LDFLAGS) and pass them to compiler and linker invocations. A build system MAY extend them with additional flags; it MUST NOT simply replace provided values with its own. If no native binaries are being generated, select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197569031)

> The build and installation system SHOULD preserve debugging information if they are requested in the relevant flags (e.g., "install -s" is not used). If there is no build or installation system (e.g., typical JavaScript libraries), select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197569712)

> The build system for the software produced by the project MUST NOT recursively build subdirectories if there are cross-dependencies in the subdirectories. If there is no build or installation system (e.g., typical JavaScript libraries), select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239552763)

> The project MUST be able to repeat the process of generating information from source files and get exactly the same bit-for-bit result. If no building occurs (e.g., scripting languages where the source code is used directly instead of being compiled), select "not applicable" (N/A).

**Unmet**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239554338)

## Installation system

> The project MUST provide a way to easily install and uninstall the software produced by the project using a commonly-used convention.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197566964)

> The installation system for end-users MUST honor standard conventions for selecting the location where built artifacts are written to at installation time. For example, if it installs files on a POSIX system it MUST honor the DESTDIR environment variable. If there is no installation system or no standard convention, select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197567621)

> The project MUST provide a way for potential developers to quickly install all the project results and support environment necessary to make changes, including the tests and test environment. This MUST be performed with a commonly-used convention.

**Met. https://github.com/nodejs/node/blob/main/doc/contributing/pull-requests.md#setting-up-your-local-environment**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197571622)


## Externally-maintained components

> The project MUST list external dependencies in a computer-processable way. (URL required)

**Met. https://github.com/nodejs/node/blob/main/doc/contributing/maintaining/maintaining-dependencies.md**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196315107)

> Projects MUST monitor or periodically check their external dependencies (including convenience copies) to detect known vulnerabilities, and fix exploitable vulnerabilities or verify them as unexploitable.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [CII Best Practices: Dependency Monitoring](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#dependency_monitoring)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196315692)

> The project MUST either:
>   1. make it easy to identify and update reused externally-maintained components; or
>   2. use the standard components provided by the system or programming language.
> 
> Then, if a vulnerability is found in a reused component, it will be easy to update that component.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197572853)

> The project SHOULD avoid using deprecated or obsolete functions and APIs where FLOSS alternatives are available in the set of technology it uses (its "technology stack") and to a supermajority of the users the project supports (so that users have ready access to the alternative).

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239555345)

## Automated test suite

> An automated test suite MUST be applied on each check-in to a shared repository for at least one branch. This test suite MUST produce a report on test success or failure.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167973646)

> The project MUST add regression tests to an automated test suite for at least 50% of the bugs fixed within the last six months.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239555893)

> The project MUST have FLOSS automated test suite(s) that provide at least 80% statement coverage if there is at least one FLOSS tool that can measure this criterion in the selected language.

**Met. https://app.codecov.io/gh/nodejs/node**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [CII Best Practices: Test Statement Coverage 80%](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#test_statement_coverage80)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239556619)

## New functionality testing

> The project MUST have a formal written policy that as major new functionality is added, tests for the new functionality MUST be added to an automated test suite.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167973732)

> The project MUST include, in its documented instructions for change proposals, the policy that tests are to be added for major new functionality.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167973798)

## Warning flags

> Projects MUST be maximally strict with warnings in the software produced by the project, where practical.

**Met**

Context:
- [CII Best Practices: Quality](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#quality)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239557605)

# Security

## Secure development knowledge

> The project MUST implement secure design principles (from "know_secure_design"), where applicable. If the project is not producing software, select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1167973834)

## Use basic good cryptographic practices

_Note that some software does not need to use cryptographic mechanisms. If your project produces software that (1) includes, activates, or enables encryption functionality, and (2) might be released from the United States (US) to outside the US or to a non-US-citizen, you may be legally required to take a few extra steps. Typically this just involves sending an email. For more information, see the encryption section of [Understanding Open Source Technology & US Export Controls](https://www.linuxfoundation.org/resources/publications/understanding-us-export-controls-with-os-projects/)._

> The default security mechanisms within the software produced by the project MUST NOT depend on cryptographic algorithms or modes with known serious weaknesses (e.g., the SHA-1 cryptographic hash algorithm or the CBC mode in SSH).

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239561347)

> The project SHOULD support multiple cryptographic algorithms, so users can quickly switch if one is broken. Common symmetric key algorithms include AES, Twofish, and Serpent. Common cryptographic hash algorithm alternatives include SHA-2 (including SHA-224, SHA-256, SHA-384 AND SHA-512) and SHA-3.

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196317820)

> The project MUST support storing authentication credentials (such as passwords and dynamic tokens) and private cryptographic keys in files that are separate from other information (such as configuration files, databases, and logs), and permit users to update and replace them without code recompilation. If the project never processes authentication credentials and private cryptographic keys, select "not applicable" (N/A).

**N/A**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196318822)

> The software produced by the project SHOULD support secure protocols for all of its network communications, such as SSHv2 or later, TLS1.2 or later (HTTPS), IPsec, SFTP, and SNMPv3. Insecure protocols such as FTP, HTTP, telnet, SSLv3 or earlier, and SSHv1 SHOULD be disabled by default, and only enabled if the user specifically configures it. If the software produced by the project does not support network communications, select "not applicable" (N/A). 

**N/A**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239562987)

> The software produced by the project SHOULD, if it supports or uses TLS, support at least TLS version 1.2. Note that the predecessor of TLS was called SSL. If the software does not use TLS, select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196319849)

> The software produced by the project MUST, if it supports TLS, perform TLS certificate verification by default when using TLS, including on subresources. If the software does not use TLS, select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239563613)

> The software produced by the project MUST, if it supports TLS, perform certificate verification before sending HTTP headers with private information (such as secure cookies). If the software does not use TLS, select "not applicable" (N/A).

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239564514)

## Secure release

> The project MUST cryptographically sign releases of the project results intended for widespread use, and there MUST be a documented process explaining to users how they can obtain the public signing keys and verify the signature(s). The private key for these signature(s) MUST NOT be on site(s) used to directly distribute the software to the public. If releases are not intended for widespread use, select "not applicable" (N/A).

**Met. https://github.com/nodejs/node/blob/main/doc/contributing/releases.md#3-a-publicly-listed-gpg-key**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [CII Best Practices: Signed Releases](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#signed_releases)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196321651)

> It is SUGGESTED that in the version control system, each important version tag (a tag that is part of a major release, minor release, or fixes publicly noted vulnerabilities) be cryptographically signed and verifiable as described in [signed_releases](https://bestpractices.coreinfrastructure.org/en/projects/29?criteria_level=1#signed_releases).

**Met. https://github.com/nodejs/node/blob/main/doc/contributing/releases.md#11-tag-and-sign-the-release-commit**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1196322661)

## Other security issues

> The project results MUST check all inputs from potentially untrusted sources to ensure they are valid (an *allowlist*), and reject invalid inputs, if there are any restrictions on the data at all.

**Met**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [CII Best Practices: Input Validation](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#input_validation)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197613631)

> Hardening mechanisms SHOULD be used in the software produced by the project so that software defects are less likely to result in security vulnerabilities.

**NA**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [CII Best Practices: Hardening](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#hardening)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1239564972)

> The project MUST provide an assurance case that justifies why its security requirements are met. The assurance case MUST include: a description of the threat model, clear identification of trust boundaries, an argument that secure design principles have been applied, and an argument that common implementation security weaknesses have been countered. (URL required)

**Met. https://github.com/nodejs/node/blob/main/SECURITY.md**

Context:
- [CII Best Practices: Security](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#security)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197586560)

# Analysis

## Static code analysis

> The project MUST use at least one static analysis tool with rules or approaches to look for common vulnerabilities in the analyzed language or environment, if there is at least one FLOSS tool that can implement this criterion in the selected language.

**Met. https://github.com/nodejs/node/blob/main/doc/contributing/static-analysis.md**

Context:
- [CII Best Practices: Analysis](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#analysis)
- [Team discussion](https://github.com/nodejs/security-wg/pull/955#discussion_r1197610195)

## Dynamic code analysis

> If the software produced by the project includes software written using a memory-unsafe language (e.g., C or C++), then at least one dynamic tool (e.g., a fuzzer or web application scanner) MUST be routinely used in combination with a mechanism to detect memory safety problems such as buffer overwrites. If the project does not produce software written in a memory-unsafe language, choose "not applicable" (N/A).

**Met. valgrind for c++**

Context:
- [CII Best Practices: Analysis](https://github.com/coreinfrastructure/best-practices-badge/blob/main/docs/other.md#analysis)