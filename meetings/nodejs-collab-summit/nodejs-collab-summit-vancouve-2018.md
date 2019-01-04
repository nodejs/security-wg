# Security and Node.js - lead by the Security Working Group

Summit Topic: Security and Node.js 

## Motivation/Abstract

This working session aims to bring the security working group together with the broader collaborator base to discuss issues around security.  Are there gaps collaborators think the WG should tackle, a review of some of the current hot tops as well as a review of the WG processes to validate they are still appropriate/applicable.

## Agenda

* What does broad community believe security-wg should be working on?

* Security Guidelines 
  * Coding conventions, etc. Should we have something more official like "project" or "security-wg" guidelines
  * Lets get Jamie Davis to held lead this discussion. (Michael to reach out to see if he is going to be at the collaborator summit)

* Review status on progress on security policies
  * Cover @addaleax PR, etc.

* Review existing processes  (bug bounty, 3rd party triage, core security processes)
  * Are current processes still valid/appropriate
  * Are there  additional processes we should capture


## Security WG Agenda minutes

### General notes that came up

- jasnell: For Node.js Core security program we want more people to join so that it will be easier to handle the load and work on that (due to some Node core members  signing off from work there)

- Node.js policies issue #22112 - if you have opinions or ideas please get involved on the PR; bengl: there’s also another security implementation by bradley mack that we should consider

- Open an issue on the repo to find a good time for everyone to attend the monthly 

- Can we create more exposure and awareness of Node.js Security related topics, tools and practices using a dedicated page/repo

### What does broad community believe security-wg should be working on?

- jasnell: having a set of security related test suites
- davisjam: adding as part of CI scanning for regexes
- vladimir: creating best practices for the Node.js platform
- trott: its worth checking with the docs team about the security best practices
- davisjam: can we have a list of known security tools or guides in the ecosystem
- jasnell: can we facilitate the vulnerability database in such a way that it is a single hub that vulnerabilities are being funneled to and the ecosystem, including commercial companies (i.e: snyk/npm/sqreen), can work on it together with the same shared guidelines, processes, etc.

### Debugger issue

We have consensus on issuing a CVE for the node core debugger issue where the debugger defaults to listening on all ports. alejandro and jasnell: we should probably do better at communicating this such as a blog post. we can document the change in the node docs too.

