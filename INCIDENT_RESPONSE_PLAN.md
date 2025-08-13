# Node.js Security Incident Response Plan

This document outlines the procedures to follow when responding to
security incidents affecting the Node.js project.

It is intended for Node.js maintainers and security team members who
need to respond to various types of security incidents.

## Table of Contents

1. [Security Incident Types](#security-incident-types)
2. [Incident Response Team](#incident-response-team)
3. [Incident Response Procedures](#incident-response-procedures)
  - [Premature Disclosure](#premature-disclosure)
  - [Zero-Day Vulnerability](#zero-day-vulnerability)
  - [Dependency Vulnerability](#dependency-vulnerability)
  - [Embargo Violation](#embargo-violation)
4. [Communication Channels](#communication-channels)
5. [Post-Incident Analysis](#post-incident-analysis)

## Security Incident Types

Security incidents affecting Node.js may include, but are not limited to:

- **Premature Disclosure**: When a vulnerability is publicly disclosed before a patch is available
- **Zero-Day Vulnerability**: A previously unknown vulnerability that is being actively exploited
- **Dependency Vulnerability**: Critical vulnerabilities in Node.js dependencies
- **Embargo Violation**: When confidential vulnerability information is shared before the agreed embargo date

## Incident Response Team

The Node.js incident response team includes:

- [Technical Steering Committee (TSC) members](https://github.com/nodejs/tsc)
- [Security Release](https://github.com/orgs/nodejs/teams/security-release)
- [Security Release Stewards](https://github.com/orgs/nodejs/teams/security-stewards)

## Incident Response Procedures

### Premature Disclosure

When a security vulnerability is prematurely disclosed before a patch is ready:

1. **Immediate Action**:
   - Transfer the issue to the private [`premature-disclosures`](https://github.com/nodejs/premature-disclosures) repository
   - Immediately inform `tsc@nodejs.org`

2. **Assessment**:
   - Security team evaluates the severity and exploitability
   - Determine if an emergency release is required

3. **Response**:
   - Prioritize developing a fix for the vulnerability
   - Prepare a security advisory draft
   - Schedule an accelerated release timeline

### Zero-Day Vulnerability

When a potential zero-day vulnerability is discovered:

1. **Immediate Action**:
   - Contact `tsc@nodejs.org` immediately
   - Invite relevant members to a new private channel on OpenJS Foundation Slack
   - Mark all communications as confidential

2. **Containment**:
   - Identify the scope of the vulnerability
   - Determine if temporary mitigation measures are possible
   - Assess active exploitation in the wild

3. **Resolution**:
   - Assemble an emergency response team to develop a fix
   - Prepare for an out-of-band security release
   - Create a detailed timeline for fix development, testing, and release

### Dependency Vulnerability

When a critical vulnerability affects a Node.js dependency:

1. **Assessment**:
   - Determine if the vulnerability impacts Node.js users
   - Evaluate if the vulnerable dependency code path is reachable

2. **Coordination**:
   - Contact the dependency maintainers via private channels
   - Coordinate disclosure timeline and fix development
   - Consider preparing a Node.js-specific patch if necessary

3. **Response**:
   - Plan for version updates or backports as needed
   - Include fixes in the next appropriate release

### Embargo Violation

When confidential vulnerability information is shared before an agreed embargo date:

1. **Verification**:
   - Confirm that an embargo violation has occurred
   - Assess the extent of the information leaked

2. **Notification**:
   - Inform all parties involved in the original disclosure
   - Contact `tsc@nodejs.org` immediately

3. **Acceleration**:
   - Consider accelerating the release schedule
   - Update communication plans accordingly

## Communication Channels

During security incidents, use the following communication channels:

- **Private**: OpenJS Foundation Slack private channels
- **Semi-private**: HackerOne for coordinating with reporters
- **Private Repositories**: GitHub private repositories for fix development
- **Email**: `security@nodejs.org` and `tsc@nodejs.org` for official communications
- **Public**: The Node.js blog and social media for public announcements (post-fix)

## Post-Incident Analysis

After resolving a security incident:

1. **Documentation**:
   - Document the incident timeline
   - Record lessons learned and response effectiveness

2. **Process Improvement**:
   - Identify process gaps and improvement opportunities
   - Update this incident response plan as needed

3. **Follow-up**:
   - Conduct a blameless post-mortem with the response team
   - Implement improvements to prevent similar incidents
