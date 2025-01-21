# Node.js maintainers: Threat Model

This document serves as a comprehensive overview of access levels for specific
resources related to the Node.js project. The purpose is to provide clarity on
who has access to each resource, the extent of that access, and any notable
distinctions within groups or subgroups. By documenting these access controls,
we aim to promote transparency, accountability, and better resource management.

> [!NOTE]
> This document is still under development.

##  Access per Group

The Access per Group table below outlines the permissions granted to different
teams and individuals, categorized by resource and access level. The levels are
inspired by standard UNIX permission notations, defined as follows:

* `-`: No access
* `r`: Read-only access
* `w`: Write access
* `a`: Admin/Owner access

**Additional notes:**
- While some teams can have access to a resource, like the `secrets`, they
might have different access level internally based on sub-groups.
- Some individuals and team have access such write in different GitHub
repositories in the org, like Working groups or subteams.

> [!NOTE]
> ¹ - All repositories with code that get published or has some impact on nodejs/core
> ² - Releasers has access to run CI during CI Embargo (Security Release)

| Resource | External people | Contributors - Core/Triagers/WG | Build - Test/Infra/Admin | Admin - TSC/Releasers/Moderation | Security Stewards/Triagers/External | GitHub - Actions/Plugins |
|-         |-                |-                                |-                         |-                                 |-                                    |-                         |
| **HackerOne**                | - | -\-\- | -\-\- | aw-  | www   | -\- | 
| **MITRE**                    | - | -\-\- | -\-\- | a-\- | w-\-  | -\- | 
| **private/node-private**     | - | -\-\- | www   | aw-  | w-w   | -\- |
| **private/security-release** | - | -\-\- | -\-\- | a-\- | ww-   | -\- |
| **private/secrets**          | - | -\-\- | www   | a-\- | -\-\- | -\- |
| **nodejs/node**              | r | wrr   | rrw   | awa  | rrr   | wr  |
| **nodejs/deps¹**             | r | rrr   | rrw   | arr  | rrr   | wr  |
| **nodejs/build** (GH)        | r | rrr   | rrw   | awa  | rrr   | wr  |
| **nodejs/node-core-utils**   | r | rrr   | rrw   | awa  | rrr   | wr  |
| **npm account**              | - | -     | -a-   | a-\- | -\-\- | -\- |
| **Jenkins CI - test**        | r | ww-   | wwa   | -w²- | -\-\- | ww  |
| **Jenkins CI - release**     | - | -\-\- | -ww   | -w-  | -\-\- | -\- |
| **Infra - test**             | - | w-\-  | aaa   | ww-  | -w-   | ww  |
| **Infra - release**          | - | -\-\- | -ww   | -w-  | -\-\- | -\- |
| **Build infra**              | - | -\-\- | -a-   | -\-\-| -\-\- | -\- |
| **Website Infra**            | - | -\-\- | -a-   | a-\- | -\-\- | -\- |
| **Youtube**                  | - | -\-w  | -\-\- | a-\- | -\-\- | -\- |
| **Zoom**                     | r | rrw   | -\-\- | a-\- | -\-\- | -\- |
| **1Password**                | - | -\-r  | -\-\- | a-\- | -\-\- | -\- |
| **Social media accounts**    | - | -\-\- | -\-\- | -\-\-| -\-\- | -\- |
| **Email** (nodejs-sec)       | r | rrr   | rrr   | awr  | wrr   | rr  |
| **Email** (io.js aliases)    | r | -\-\- | -a-   | w-\- | -\-\- | -\- |

Repos under nodejs which do not include code, are not covered as they cannot lead to the threats listed.
pkgjs.org is excluded as it does not include code/repos that make it into Node.js binaries

## Threats

### Malicious code in Node.js codebase

In this scenario we asume that a malicios actor will include a malicious code
(malware, malicious dependencies, polluted binaries...) in the codebase (GitHub repository)

**Vectors:**
* Use priviledge access to GitHub in order to add/modify/pollute the Git History
* Pollute a dependency that is used by the project directly (v8, livub, openSSL, undici...)
or inderictly (builds process/testing)

**Related CWEs:**
* [CWE-94: Improper Control of Generation of Code ('Code Injection')](https://cwe.mitre.org/data/definitions/94.html)
* [CWE-1395: Dependency on Vulnerable Third-Party Component](https://cwe.mitre.org/data/definitions/1395.html)
* [CWE-506: Embedded Malicious Code](https://cwe.mitre.org/data/definitions/506.html)

| Resource | Minimum Access | Description |
|-|-|-|
| **HackerOne**                | -     | N\A |
| **MITRE**                    | -     | N\A |
| **private/node-private**     | Write | - |
| **private/security-release** | -     | N\A |
| **private/secrets**          | Read  | You must have a GPG key to decrypt the keys |
| **nodejs/node**              | Write | - |
| **nodejs/deps¹**             | Write | If you have write access to Node.js dependencies you can hide malicious code and publish a new version, eventually the automation will create a PR to sync to nodejs/core and this code might pass without supervision |
| **nodejs/build** (GH)        | -     | N\A |
| **nodejs/node-core-utils**   | Write | User must have _Write_ access to nodejs/node to open a attack vector|
| **npm account**              | Write | Because you can change the node-core-utils/branch-diff code to inject malicious code |
| **Jenkins CI - test**        | -     | N\A |
| **Jenkins CI - release**     | -     | N\A |
| **Infra - test**             | ?     | Check if the CI runs with push permissions to Node.js |
| **Infra - release**          | -     | N\A |
| **Build infra**              | -     | N\A |
| ~~Website Infra~~            | -     | N\A |
| **Youtube**                  | -     | N\A |
| **Zoom**                     | -     | N\A |
| **1Password**                | -     | N\A |
| **Social media accounts**    | -     | N\A |
| **Email** (nodejs-sec)       | -     | N\A |
| **Email** (io.js aliases)    | -     | N\A |
