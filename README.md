[![Node.js Security WG](https://img.shields.io/badge/Node.js-Security%20WG-green.svg)]()
[![Security WG Meetings](https://img.shields.io/badge/YouTube-Security%20WG%20Meetings-red.svg)](  https://www.youtube.com/channel/UCQPYJluYC_sn_Qz_XE-YbTQ/search?query=Security+WG+meeting)
[![Security WG Twitter Hashtag](https://img.shields.io/badge/Twitter-%23SecurityWG-blue.svg)](https://twitter.com/search?q=SecurityWG)
[![GitHub Logo](https://img.shields.io/badge/Join%20us%20on-Slack-e01563.svg)](https://nodejs-security-wg.herokuapp.com/)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md
)

# Security Working Group

Table of Contents

- Vulnerability Management
  * [Security Announcement Process](./processes/security_annoucement_process.md)
  * [Security Release Process](./processes/security_release_process.md)
  * [Node.js CVE management process](./processes/cve_management_process.md)
  * [Responsible Disclosure Policy](./processes/responsible_disclosure_template.md)
  * [Third-Party Ecosystem Triage Process](./processes/third_party_vuln_process.md)
  * [Third-Party HackerOne Submission form](./processes/third_party_vuln_submit_form_hacker1.md)
  * [Vulnerability Database](./processes/vuln_db.md)
  * [Recognition for Security Researchers](./processes/recognition.md)
- Processes for Security WG Members
  * [Security Team Membership Policy](./processes/security_team_membership_policy.md)
  * [On-boarding Team Members](./processes/security_team_onboarding.md)
  * [Off-boarding Team Members](./processes/security_team_offboarding.md)
- [Private Node.js core security group](#private-nodejs-core-security-group)
- [Node.js Bug Bounty Program](#nodejs-bug-bounty-program)
- [Participate in Responsible Security Disclosure](#participate-in-responsible-security-disclosure)
- [Charter](#charter)
- [Code of Conduct](#code-of-conduct)
- [Moderation Policy](#moderation-policy)
- [Current Project Team Members](#current-project-team-members)
- [Emeritus Members](#emeritus-members)


## [Charter](https://github.com/nodejs/TSC/blob/master/WORKING_GROUPS.md#security)

The Security Working Group manages all aspects and processes linked to Node.js security.

Responsibilities include:
* Define and maintain security policies and procedures for:
  * the core Node.js project
  * other projects maintained by the Node.js Technical Steering Committee (TSC).
* Work with the Node Security Platform to bring community vulnerability data into
  the foundation as a shared asset.
* Ensure the vulnerability data is updated in an efficient and timely manner. For example, ensuring there
  are well-documented processes for reporting vulnerabilities in community
  modules.
* Review and recommend processes for handling of security reports (but not the
  actual administration of security reports, which are reviewed by a group of people
  directly delegated to by the TSC).
* Define and maintain policies and procedures for the coordination of security
  concerns within the external Node.js open source ecosystem.
* Offer help to npm package maintainers to fix high-impact security bugs.
* Maintain and make available data on disclosed security vulnerabilities in:
  * the core Node.js project
  * other projects maintained by the Node.js Foundation technical group
  * the external Node.js open source ecosystem
* Promote the improvement of security practices within the Node.js ecosystem.
* Recommend security improvements for the core Node.js project.
* Facilitate and promote the expansion of a healthy security service and product
  provider ecosystem.

## Private Node.js core security group

The Node.js Security Working Group is _not_ responsible for managing incoming
security reports to the security@nodejs.org address, nor is it privy to or
responsible for preparing embargoed security patches and releases.

The [Node.js TSC][] maintains primary responsibility for the management of private
security activities for Node.js core but relies on the Node.js Security Working
Group to recommend and help maintain policies and procedures for that
management.

## Node.js Bug Bounty Program

The Node.js project engages in an official bug bounty program for security researchers and responsible public disclosures.

The program is managed through the HackerOne platform at [https://hackerone.com/nodejs](https://hackerone.com/nodejs) with further details.

## Participate in Responsible Security Disclosure

As a module author you can provide your users with security guidelines regarding any exposures and vulnerabilities in your project, based on a responsible dislcosure policy [document](https://github.com/nodejs/security-wg/blob/e2c03e62d73635a766156c6ea4f9aefb35c04603/processes/responsible_disclosure_template.md) we've already put in place.

You can show your users you take security matters seriously and drive higher confidence by following any of the below suggested actions:

1. Adding a `SECURITY.md` file in your repository that you can copy&paste from [us](https://github.com/nodejs/security-wg/blob/e2c03e62d73635a766156c6ea4f9aefb35c04603/processes/responsible_disclosure_template.md). Just like having a contribution of code of conduct guidelines, a security guideline will help user or bug hunters with the process of reporting a vulnerability or security concern they would like to share.

2. Adding our Responsible Security Dislosure badge to your project's README which links to the `SECURITY.md` document.

## Current Project Team Members

* [aeleuterio](https://github.com/aeleuterio) **André Eleuterio**
* [bengl](https://github.com/bengl) - **Bryan English**
* [brycebaril](https://github.com/brycebaril) - **Bryce Baril**
* [ChALkeR](https://github.com/ChALkeR) - **Сковорода Никита Андреевич**
* [cjihrig](https://github.com/cjihrig) - **Colin Ihrig**
* [dgonzalez](https://github.com/dgonzalez) - **David Gonzalez**
* [deian](https://github.com/deian) - **Deian Stefan**
* [drifkin](https://github.com/drifkin) - **Devon Rifkin**
* [elexy](https://github.com/Elexy) - **Alex Knol**
* [grnd](https://github.com/grnd) - **Danny Grander**
* [karenyavine](https://github.com/karenyavine) **Karen Yavine Shemesh**
* [lirantal](https://github.com/lirantal) - **Liran Tal**
* [MarcinHoppe](https://github.com/MarcinHoppe) - **Marcin Hoppe**
* [mdawson](https://github.com/mdawson) - **Michael Dawson**
* [mgalexander](https://github.com/mgalexander) - **Michael Alexander**
* [pxlpnk](https://github.com/pxlpnk) - **Andreas Tiefenthaler**
* [ronperris](https://github.com/ronperris) - **Ron Perris**
* [sam-github](https://github.com/sam-github) - **Sam Roberts**
* [SomeoneWeird](https://github.com/SomeoneWeird) - **Adam Brady**
* [vdeturckheim](https://github.com/vdeturckheim) - **Vladimir de Turckheim**

## Emeritus Members

* [digitalinfinity](https://github.com/digitalinfinity) - **Hitesh Kanwathirtha**
* [dougwilson](https://github.com/dougwilson) - **Doug Wilson**
* [evilpacket](https://github.com/evilpacket) - **Adam Baldwin**
* [gergelyke](https://github.com/gergelyke) - **Gergely Nemeth**
* [gibfahn](https://github.com/gibfahn) - **Gibson Fahnestock**
* [jasnell](https://github.com/jasnell) - **James M Snell**
* [jbergstroem](https://github.com/jbergstroem) - **Johan Bergström**
* [joshgav](https://github.com/joshgav) - **Josh Gavant**
* [mcollina](https://github.com/mcollina) - **Matteo Collina**
* [ofrobots](https://github.com/ofrobots) - **Ali Ijaz Sheikh**
* [roccomuso](https://github.com/roccomuso) - **Rocco Musolino**
* [shigeki](https://github.com/shigeki) - **Shigeki Ohtsu**

## Vulnerability Triage Teams

There are two Triage Teams associated with Node.js. They have different scopes,
different HackerOne programs, and they don't share members (though an
individual may be a member of both teams).

Note that membership in the Security WG does not automatically give access to
undisclosed vulnerabilities in any of the Node.js programs on HackerOne

* [*Ecosystem Vulnerabilities*](https://hackerone.com/nodejs-ecosystem):
  Managed by the [Ecosystem Triage Team][].

* [*Node.js Vulnerabilities*](https://hackerone.com/nodejs): Managed by the
  @nodejs/security team.

# Code of Conduct

The [Node.js Code of Conduct](https://github.com/nodejs/admin/blob/master/CODE_OF_CONDUCT.md) applies to this WG.

# Moderation Policy

The [Node.js Moderation Policy](https://github.com/nodejs/admin/blob/master/Moderation-Policy.md) applies to this WG.

[Node.js TSC]: https://github.com/nodejs/TSC
[Ecosystem Triage Team]: processes/third_party_vuln_process.md#members
