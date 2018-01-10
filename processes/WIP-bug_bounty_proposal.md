# Proposal to advance a Bug Bounty program for the Node.js® organization

## Introduction

Security is an essential part of the ongoing success of the Node.js community. The community is a vital part of one of the most aggressive markets available providing critical runtime infrastructure for a growing percentage of the internet and corporate computing requirements in 2018. A bug bounty program has become a standard mechanism to improve the security posture of projects, organizations and companies at every level.

A bug bounty program is a mechanism to formally engage security researchers and developers in a way that provides benefits to the community along multiple vectors:

1. Improved Security Depth of Coverage • Finding security defects is specialized work that benefits from deep expertise and fresh eyes
1. Validate Nodejs as a secure platform • Expanding the community into the security world is a growth area and enables new audiences for nodejs to be proposed
1. Improved Security Scope of Coverage • Reduced Risk we have bugs that are undiscovered currently exposing ourselves and our users to unnecessary risk
1. Improved Process in SDLC • Ongoing analysis of discoveries provides an opportunity to improve security through practices and/or security focus and tooling.

## Proposal Process

The proposed process for considering a Bug Bounty program makes heavy reference to existing work that the Security WG has already started (establishing a triage team, organized disclosure system, etc.) and ongoing partnership with HackerOne. High level process:

-[ ] Security WG reviews readiness and desire to have such a program (presume yes unless someone objects)
-[ ] Security WG presents proposal to CTC (see next steps on how to get there)
-[ ] Security WG & CTC establish Bug Bounty Leader & Bug Bounty Team (will take additional coordination across org)

## Next steps

1. Core team readiness review and architectural decisions

   - goals/kpi (scope, responsiveness goals, impact of defects, team size, budget)
   - private vs. public
   - existing security analysis
   - backlog validation

1. Engage other committies to let them know of the proposal (community committee as there is a PR element, others?)
1. Review and evolve draft note into a proposal
1. Create draft Security Page updates that describe the rules of the road

## Readiness review and questions for input

As preparation, the Security WG already has an organization within HackerOne and the general framework as well as the technical tools to offer a Bug Bounty program.

1. Do we have a security assessment of the current node.js core? *no formal assessment, should not block, but increases risk of public bounty program*
1. Do we have any scope limitations on what we would declare? *yes, we do, just what are they exactly?*
1. Should we bounty "LTS" version bugs and non-LTS the same *(gut is yes)*? Release vs. HEAD *(gut is no)*?
1. Do we have enough volunteer staff (need to get HackerOne help to know what the right number might should be)
1. Would a private bounty program be acceptable to start? *Lots of indications from those who have gone before that we should start a closed / invite program first*
1. Does the security-wg or another group own the communication plan for describing results to the broader community?
1. Do we know where we will get sufficient funding sources? *HackerOne I think has suggested they can help with some elements and that there are funds that can be tapped, but I don't have a sense of scope still.*

## Proposal to be completed

We, the nodejs security-wg proposes, that a private bug bounty program be established to improve the core project's overall security posture. The structure of the program will be a team of at least individuals from the community who triage inbound security reports (similar to today) with an procedure that utilizes the HackerOne tooling and our existing github environment. Initially there will be a flury of activity and added time might be necessary to ensure prompt responses to new members joining the community specificially from the security industry. We will budget ($xxxx USD) in support of this program which has generously been provided by grants from (Linux Foundation) and (others?).

Based on our current reviews, we believe the core project scope as defined below will generate substantial interest. The Bug Bounty Team will consist of the security-wg and work within the HackerOne tooling to assign payout amounts and delivery of payment to contributors. With any such program, we expect to monitor a handful of key indicators of success.

- hit ratio of valid vulnerabilities identified
- average impact of vulnerabilities
- peak impact of vulnerabilities
- budget utilization
- per component vulnerability density
- (others tbd)

Based on feedback and as we gain experience with the program dynamics, we should reevaluate within six (6) months if we can become an open bug bounty project that allows submissions and pays bounties to all researchers and hackers.

Based on feedback and as we gain experience with the program receipts we should reevaluate the bounty scale and scope within six (6) months.

## Some resources

- [Bug Bounty First Impressions](https://www.hackerone.com/blog/bug-bounty-first-impressions "www.hackerone.com")
- [Video: Five Reasons Not to Run a Bug Bounty Program](https://www.youtube.com/watch?v=l1-k4MQhmDo "www.youtube.com")
- [Bug Bounty Launch Lessons](https://medium.com/starting-up-security/bounty-launch-lessons-c7c3be3f5b "medium.com")
- [Bug Bounty 5 years in](https://medium.com/@collingreene/bug-bounty-5-years-in-c95cda604365 "medium.com")
- [Facebook](https://www.facebook.com/whitehat "www.facebook.com")
- [Ruby](https://www.ruby-lang.org/en/security/ "www.ruby-lang.org") & [HackerOne Ruby page](https://hackerone.com/ruby "www.hackerone.com")