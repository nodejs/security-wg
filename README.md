[![Node.js Security WG](https://img.shields.io/badge/Node.js-Security%20WG-green.svg)]()
[![Security WG Meetings](https://img.shields.io/badge/YouTube-Security%20WG%20Meetings-red.svg)](  https://www.youtube.com/channel/UCQPYJluYC_sn_Qz_XE-YbTQ/search?query=Security+WG+meeting)
[![Security WG Twitter Hashtag](https://img.shields.io/badge/Twitter-%23SecurityWG-blue.svg)](https://twitter.com/search?q=SecurityWG)
[![GitHub Logo](https://img.shields.io/badge/Join%20us%20on-Slack-e01563.svg)](https://nodejs-security-wg.herokuapp.com/)
[![Security Responsible Disclosure](https://img.shields.io/badge/Security-Responsible%20Disclosure-yellow.svg)](https://github.com/nodejs/security-wg/blob/master/processes/responsible_disclosure_template.md
)

# Ecosystem Security Working Group

Table of Contents

- Vulnerability Management
  * [Responsible Disclosure Policy](./processes/responsible_disclosure_template.md)
  * [Third-Party Ecosystem Triage Process](./processes/third_party_vuln_process.md)
  * [Third-Party HackerOne Submission form](./processes/third_party_vuln_submit_form_hacker1.md)
  * [Vulnerability Database](./processes/vuln_db.md)
  * [Recognition for Security Researchers](./processes/recognition.md)
- Processes for Security WG Members
  * [Security Team Membership Policy](./processes/security_team_membership_policy.md)
  * [On-boarding Team Members](./processes/security_team_onboarding.md)
  * [Off-boarding Team Members](./processes/security_team_offboarding.md)
- [Node.js Bug Bounty Program](#nodejs-bug-bounty-program)
- [Participate in Responsible Security Disclosure](#participate-in-responsible-security-disclosure)
- [Charter](#charter)
- [Code of Conduct](#code-of-conduct)
- [Moderation Policy](#moderation-policy)
- [Current Project Team Members](#current-project-team-members)
- [Emeritus Members](#emeritus-members)


## [Charter](https://github.com/nodejs/TSC/blob/master/WORKING_GROUPS.md#security)

The Ecosystem Security Working Group works to improve the security of the Node.js Ecosystem.

Responsibilities include:
* Work with the Node Security Platform to bring community vulnerability data into
  the foundation as a shared asset.
* Ensure the vulnerability data is updated in an efficient and timely manner. For example, ensuring there
  are well-documented processes for reporting vulnerabilities in community
  modules.
* Define and maintain policies and procedures for the coordination of security
  concerns within the external Node.js open source ecosystem.
* Offer help to npm package maintainers to fix high-impact security bugs.
* Maintain and make available data on disclosed security vulnerabilities in:
  * the core Node.js project
  * other projects maintained by the Node.js Foundation technical group
  * the external Node.js open source ecosystem
* Promote the improvement of security practices within the Node.js ecosystem.
* Facilitate and promote the expansion of a healthy security service and product
  provider ecosystem.

This Working Group is _not_ responsible for managing or responding to
security reports against Node.js itself. That responsibility remains with
the [Node.js TSC][].

## Node.js Bug Bounty Program

The Node.js project engages in an official bug bounty program for security researchers and responsible public disclosures. We have established a first draft of accepted criteria and npm modules and projects that are eligible for monetary reward at [Bug Bounty Criteria](./processes/bug_bounty_criteria.md).

The program is managed through the HackerOne platform at [https://hackerone.com/nodejs](https://hackerone.com/nodejs) with further details.

## Participate in Responsible Security Disclosure

As a module author you can provide your users with security guidelines regarding any exposures and vulnerabilities in your project, based on a responsible disclosure policy [document](https://github.com/nodejs/security-wg/blob/e2c03e62d73635a766156c6ea4f9aefb35c04603/processes/responsible_disclosure_template.md) we've already put in place.

You can show your users you take security matters seriously and drive higher confidence by following any of the below suggested actions:

1. Adding a `SECURITY.md` file in your repository that you can copy&paste from [us](https://github.com/nodejs/security-wg/blob/e2c03e62d73635a766156c6ea4f9aefb35c04603/processes/responsible_disclosure_template.md). Just like having a contribution of code of conduct guidelines, a security guideline will help user or bug hunters with the process of reporting a vulnerability or security concern they would like to share.

2. Adding our Responsible Security Dislosure badge to your project's README which links to the `SECURITY.md` document.

## Current Project Team Members

* [ChALkeR](https://github.com/ChALkeR) - **Сковорода Никита Андреевич**
* [cjihrig](https://github.com/cjihrig) - **Colin Ihrig**
* [dgonzalez](https://github.com/dgonzalez) - **David Gonzalez**
* [deian](https://github.com/deian) - **Deian Stefan**
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

* [aeleuterio](https://github.com/aeleuterio) **André Eleuterio**
* [bengl](https://github.com/bengl) - **Bryan English**
* [brycebaril](https://github.com/brycebaril) - **Bryce Baril**
* [digitalinfinity](https://github.com/digitalinfinity) - **Hitesh Kanwathirtha**
* [drifkin](https://github.com/drifkin) - **Devon Rifkin**
* [dougwilson](https://github.com/dougwilson) - **Doug Wilson**
* [elexy](https://github.com/Elexy) - **Alex Knol**
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

## Ecosystem Vulnerability Triage Team

Note that membership in the Ecosystem Security WG does not automatically give access to
undisclosed vulnerabilities on HackerOne

* [*Ecosystem Vulnerabilities*](https://hackerone.com/nodejs-ecosystem):
  Managed by the [Ecosystem Triage Team][].

# Code of Conduct

The [Node.js Code of Conduct](https://github.com/nodejs/admin/blob/master/CODE_OF_CONDUCT.md) applies to this WG.

# Moderation Policy

The [Node.js Moderation Policy](https://github.com/nodejs/admin/blob/master/Moderation-Policy.md) applies to this WG.

[Node.js TSC]: https://github.com/nodejs/TSC
[Ecosystem Triage Team]: processes/third_party_vuln_process.md#members
