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
> ² - Releasers and security triagers have access to run CI during CI Embargo (Security Release)
> ³ - Security external has access to read the CI during CI Embargo (Security Release)

| Resource | External people | Contributors - Core/Triagers/WG | Build - Test/Infra/Admin | Admin - TSC/Releasers/Moderation | Security Stewards/Triagers/External | GitHub - Actions/Plugins | Docker Team |
|-         |-                |-                                |-                         |-                                 |-                                    |-                         |- |
| **HackerOne**                | - | -\-\- | -\-\- | aw-  | www   | -\- | - |
| **MITRE**                    | - | -\-\- | -\-\- | a-\- | w-\-  | -\- | - |
| **private/node-private**     | - | -\-\- | www   | aw-  | w-w   | -\- | - |
| **private/security-release** | - | -\-\- | -\-\- | a-\- | ww-   | -\- | - |
| **private/secrets**          | - | -\-\- | www   | a-\- | -\-\- | -\- | - |
| **nodejs/node**              | r | wrr   | rrw   | awa  | rrr   | wr  | r |
| **nodejs/deps¹**             | r | rrr   | rrw   | arr  | rrr   | wr  | r |
| **nodejs/build** (GH)        | r | rrr   | rrw   | awa  | rrr   | wr  | r |
| **nodejs/docker-node** (GH)  | r | rrr   | rrr   | awa  | rrr   | wr  | w |
| **nodejs/node-core-utils**   | r | rrr   | rrw   | awa  | rrr   | wr  | r |
| **nodejs/nodejs.org**        | r | rrr   | rrr   | awa  | rrr   | wr  | r |
| **npm account**              | - | -     | -a-   | a-\- | -\-\- | -\- | - |
| **Jenkins CI - test**        | r | ww-   | wwa   | -w²- | -w²r³ | ww  | - |
| **Jenkins CI - release**     | - | -\-\- | -ww   | -w-  | -\-\- | -\- | - |
| **Infra - test**             | - | w-\-  | aaa   | ww-  | -w-   | ww  | - |
| **Infra - release**          | - | -\-\- | -ww   | -w-  | -\-\- | -\- | r |
| **Build infra**              | - | -\-\- | -a-   | -\-\-| -\-\- | -\- | - |
| **Website Infra**            | - | -\-\- | -a-   | a-\- | -\-\- | -\- | - |
| **Youtube**                  | - | -\-w  | -\-\- | a-\- | -\-\- | -\- | - |
| **Zoom**                     | r | rrw   | -\-\- | a-\- | -\-\- | -\- | - |
| **1Password**                | - | -\-r  | -\-\- | a-\- | -\-\- | -\- | - |
| **Social media accounts**    | - | -\-\- | -\-\- | -\-\-| -\-\- | -\- | - |
| **Email** (nodejs-sec)       | r | rrr   | rrr   | awr  | wrr   | rr  | - |
| **Email** (io.js aliases)    | r | -\-\- | -a-   | w-\- | -\-\- | -\- | - |
| **Slack**                    | r | rrr | rrr | rrrr | rrr | -\w | r |
| **Calendar**                 | r | rrr   | rrr   | rrrr | rrr   | -\- | r |

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
| **nodejs/nodejs.org**        | -     | N\A |
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
| **Slack**                    | -     | N\A |
| **Calendar**                 | -     | N\A |

### Malicious release binary generation in Node.js release/build processes

In this scenario we assume that a malicious actor will include a malicious code
(malware, malicious dependencies, polluted binaries...) in the release binaries
available through the Nodejs.org downloads.

**Vectors:**

* Use priviledge access to GitHub in order to add/modify/pollute the Git History
for the tooling/build repositories (like ansible scripts, etc..)
* Pollute directly machines that are part of the CI/release inventory used by
Jenkins/GH Actions
* Manipulate the CI/release pipelines in Jenkins or GH Actions (add/modify custom
scripts, pollute plugins, overwrite configuration...)  
* Swapping out release binaries where they are hosted on nodejs.org web server
* Modifying the cloudflare configuration to change were binaries are served from
* Modifying the vercel website configation

**Related CWEs:**

* [CWE-94: Improper Control of Generation of Code ('Code Injection')](https://cwe.mitre.org/data/definitions/94.html)
* [CWE-73: External Control of File Name or Path](https://cwe.mitre.org/data/definitions/73.html)
* [CWE-829: Inclusion of Functionality from Untrusted Control Sphere](https://cwe.mitre.org/data/definitions/829.html)
* [CWE-353: Missing Support for Integrity Check](https://cwe.mitre.org/data/definitions/353.html)
* [CWE-506: Embedded Malicious Code](https://cwe.mitre.org/data/definitions/506.html)

| Resource | Minimum Access    | Description |
|-         |-                  |-            |
| **HackerOne**                | - | N\A |
| **MITRE**                    | - | N\A |
| **private/node-private**     | - | N\A |
| **private/security-release** | - | N\A |
| **private/secrets**          | r | read access to secrets grants access to key resources |
| **nodejs/node**              | w | N\A |
| **nodejs/deps¹**             | - | N\A |
| **nodejs/build** (GH)        | w | write access would allow key scripts, infra to be modified |
| **nodejs/docker-node**       | - | - |
| **nodejs/node-core-utils**   | w | N\A |
| **nodejs/nodejs.org**        | - | N\A |
| **npm account**              | - | N\A |
| **Jenkins CI - test**        | - | N\A |
| **Jenkins CI - release**     | w | access to jenkins used for build would allow swapping published binaries |
| **Infra - test**             | - | N/A |
| **Infra - release**          | w | access to machines used for build would allow swapping published binaries |
| **Build infra**              | w | access to machines used for build would allow swapping published binaries |
| **Website Infra**            | w | access to machines used for build would allow swapping published binaries |
| **Youtube**                  | - | N\A |
| **Zoom**                     | - | N\A |
| **1Password**                | r | read access to secrets grants access to key resources |
| **Social media accounts**    | - | N\A |
| **Email** (nodejs-sec)       | - | N\A |
| **Email** (io.js aliases)    | - | N\A |
| **Slack**                    | - | N\A |
| **Calendar**                 | - | N\A |

Notes:

* Orka infra is shared, so any orka admin can modify test/relese machines

### Malicious docker images

| Resource | Minimum Access | Description |
|-|-|-|
| **HackerOne**                | - | N\A |
| **MITRE**                    | - | N\A |
| **private/node-private**     | - | N\A |
| **private/security-release** | - | N\A |
| **private/secrets**          | r | read access to secrets grants access to key resources |
| **nodejs/node**              | - | N\A |
| **nodejs/deps¹**             | - | N\A |
| **nodejs/build** (GH)        | - | N\A |
| **nodejs/unofficial-builds** (GH)        | w | write access would allow key scripts, infra to be modified |
| **nodejs/docker-node**       | w | modification of Docker files can modify what node.js binaries are in the images 
| **nodejs/node-core-utils**   | - | N\A |
| **nodejs/nodejs.org**        | - | N\A |
| **npm account**              | - | N\A |
| **Jenkins CI - test**        | - | N\A |
| **Jenkins CI - release**     | - | N\A |
| **Infra - test**             | - | N/A |
| **Infra - release**          | - | N\A |
| **Build infra**              | w | access to machine used for unofficial-builds as server |
| **Website Infra**            | - | N\A |
| **Youtube**                  | - | N\A |
| **Zoom**                     | - | N\A |
| **1Password**                | r | read access to secrets grants access to key resources |
| **Social media accounts**    | - | N\A |
| **Email** (nodejs-sec)       | - | N\A |
| **Email** (io.js aliases)    | - | N\A |
| **Slack**                    | - | N\A |
| **Calendar**                 | - | N\A |

### Impairing the ability of the project to do day-to-day work

* Deleting or transferring repos
* Destroying or misconfiguring infrastructure resources (e.g., build machines, cloud resources, etc.).
* Destroying publication keys (Apple, Windows..)
* Deleting calendar and calendar recurring events
* Hijacking official communication channels (Slack, email, social media)

**Vectors:**

* Compromised credentials or accounts
* Malicious insider threats
* Unauthorized access to CI/CD pipelines
* Unsecured backup systems
* Weak MFA enforcement or bypass
* Excessive permissions assigned to users

**Related CWEs:**

* CWE-284: Improper Access Control
* CWE-285: Improper Authorization
* CWE-287: Improper Authentication
* CWE-522: Insufficiently Protected Credentials
* CWE-732: Incorrect Permission Assignment for Critical Resource
* CWE-778: Insufficient Logging

| Resource | Minimum Access    | Description |
|-         |-                  |-            |
| **HackerOne**                | a | Exclude the Node.js project from H1 |
| **MITRE**                    | - | N/A |
| **private/node-private**     | a | Excluding the repository |
| **private/security-release** | w | Excluding the list of current security release |
| **private/secrets**          | r | Read access to secrets grants access to key resources |
| **nodejs/node**              | w | - |
| **nodejs/deps**              | w | Deleting repos can affect packages that relies on it |
| **nodejs/build** (GH)        | w | Write access would allow key scripts, infra to be modified |
| **nodejs/docker-node**       | w | - |
| **nodejs/node-core-utils**   | w | - |
| **nodejs/nodejs.org**        | w | - |
| **nodejs/release-cloudflare-worker** | w | - |
| **npm account**              | w | - |
| **Jenkins CI - test**        | w | - |
| **Jenkins CI - release**     | w | - |
| **Infra - test**             | w | - |
| **Infra - release**          | w | - |
| **Build infra**              | w | - |
| **Website Infra**            | w | - |
| **Youtube**                  | a | Deleting previous record meetings |
| **Zoom**                     | a | - |
| **1Password**                | r | - |
| **Social media accounts**    | w | - |
| **Email** (nodejs-sec)       | a | - |
| **Email** (io.js aliases)    | w | - |
| **nodejs/calendar**          | w | - |
| **Slack**                    | a | - |
