# Ecosystem Vulnerability Management

This document describes the management of vulnerabilities within the Node.js
ecosystem. Vulnerabilities in Node.js core are out of this scope.

## Definitions

* package: in this document, a package is a module available for use with Node.js
 and hosted on the npmjs.org repository.

## Reporting vulnerabilities

Individuals who find potential vulnerabilities in a package are invited
to complete a vulnerability report on the dedicated HackerOne organization: [https://hackerone.com/nodejs-ecosystem](https://hackerone.com/nodejs-ecosystem)

### Strict measures when reporting vulnerabilities

It is of the outmost importance that you read carefully and follow these guidelines to ensure the ecosystem as a whole isn't disrupted due to mistakenly reported vulnerabilities:

* Avoid creating new "informative" reports on HackerOne. Only create new HackerOne reports on a vulnerability if you are absolutely sure this should be tagged as an actual vulnerability. Do not attempt to create a HackerOne report with severity set to none or low in hope that this won't be picked up even if it isn't being PR'ed to the Node.js Security WG advisories. Third-party vendors and individual are tracking any new vulnerabilities reported in HackerOne and will flag them as such for their customers (think about snyk, node audit, source clear).
* HackerOne reports should never be created and triaged by the same person. If you are creating a HackeOne report for a vulnerability that you found, or on behalf of someone else, there should always be a 2nd Security WG member who triages it. If in doubt, invite more Security WG members to help triage the validity of the report. In any case, the report should follow the same process as outlined below of inviting the maintainers to review and accept the vulnerability.

## Handling vulnerability reports

When a potential vulnerability is reported, the following actions are taken:

### Triage

**Who:** The triage team

**Delay:** 2 business days

Within 2 business days, a member of the triage team provides a first answer to the
individual who submitted the potential vulnerability. The possible responses
can be:

* Acceptance: what was reported is considered as a new vulnerability
* Rejection: what was reported is not considered as a new vulnerability
* Need more information: the triage team needs more information in order to evaluate what was reported.

Triaging should include updating issue fields:
* Asset - set/create the module affected by the report
* Severity - TBD, currently left empty

Reference: [HackerOne: How do I triage a report?](https://support.hackerone.com/hc/en-us/articles/205624715-How-do-I-triage-a-Report-)

### Correction follow-up

**Who:** A member of the triage team

**Delay:** 45 days

When a vulnerability is confirmed, a member of the triage team is
designated to follow up on this report.

With the help of the individual who reported the vulnerability, they contact
the maintainers of the vulnerable package to make them aware of the
vulnerability. The maintainers can be invited as participants to the reported issue.

With the package maintainer, they define a release date for the publication
of the vulnerability. Ideally, this release date should not happen before
the package has been patched.

If the maintainers are unreachable, the vulnerability is to be made public
45 days after the triage date.

The report's vulnerable versions upper limit should be set to:
* `*` if there is no fixed version available by the time of publishing the report. This is mostly in cases where the maintainer hasn't taken part in the triage process.
* the last vulnerable version. For example: `<=1.2.3` if a fix exists in `1.2.4`

### Publication

**Who:** A member of the triage team

**Delay:** 45 days

Within 45 days after the triage date, the vulnerability must be made public.

**Severity**: Vulnerability severity is assessed using [CVSS v.3](https://www.first.org/cvss/user-guide).
More information can be found on [HackerOne documentation](https://support.hackerone.com/hc/en-us/articles/213421106-How-does-HackerOne-recommend-determining-Severity-)

If a patch is being actively developed by the package maintainer, an additional delay
can be added with the approval of the triage team and the individual who
reported the vulnerability (this is a simple vote where each member of the
triage team and the vulnerability reporter have 1 vote each).

At this point, a CVE should be requested through the HackerOne platform through
[email](cve-assign@hackerone.com) that should include the Report ID and a summary.

The vulnerability is considered as published when a Pull Request adding it
to this repository is opened.

Within HackerOne, this is handled through a "public disclosure request".

Reference: [HackerOne: How does public disclosure work?](https://support.hackerone.com/hc/en-us/articles/205269479-How-does-public-disclosure-work-)

## Vulnerabilities found outside this process

Vulnerabilities found and fixed outside this process should be added into
the vulnerability database. This can be done by anyone through a Pull Request on
this repository.

The vulnerability should include any kind of supporting material such as references, maintainer review or otherwise to confirm the vulnerability report is valid.

## Use of CVEs and reference

Every vulnerability disclosed by the triage team through HackerOne must
be assigned a CVE number.

Vulnerabilities disclosed to this repository without using HackerOne currently cannot be assigned a CVE by the triage team (we are working to resolve this) but may have a CVE number if was assigned by another entity.

## The triage team

The triage team is composed of 5 or more members of the security working group.
This team is approved and modified by a vote from the working group.

They are responsible for the management of this process.

Each member of the triage team is expected to handle vulnerabilities on a
regular basis.

Members of this team are required to follow the same NDA and privacy measures
as the [Node.js Security Team](https://github.com/nodejs/security-wg/blob/master/processes/security_team_members.md).

### Members

Members of the security teams should indicate that they accept the privacy
policies by PRing their acceptance to this file:

* @cjihrig - Colin Ihrig
* @dgonzalez - David Gonzalez
* @elexy - Alex Knol
* @grnd - Danny Grander
* @karenyavine - Karen Yavine Shemesh
* @lirantal - Liran Tal
* @MarcinHoppe - Marcin Hoppe
* @pxlpnk - Andreas Tiefenthaler
* @ronperris - Ron Perris
* @sam-github - Sam Roberts <vieuxtech@gmail.com>
* @vdeturckheim - Vladimir de Turckheim
 
### Emeritus Members

* @bengl - Bryan English
* @brycebaril - Bryce Baril
* @gergelyke - Gergely Nemeth

## HackerOne Support Engineers

Following contacts are officially assigned HackerOne support staff for the Node.js Ecosystem program:

* Alek Relyea <alek at hackerone dot com>
* Megan Mahowald <megan at hackerone dot com>
* Reed Loden @reedloden
