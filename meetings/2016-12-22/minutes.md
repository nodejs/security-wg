# Node.js Security WG meeting - 2016-12-22

* GH issue: <https://github.com/nodejs/security-wg/issues/6>
* Meeting audio: <https://youtu.be/fewvQg-DaVk>
* Previous meeting: <https://github.com/nodejs/security-wg/pull/10>

> Attendees were more than google allowed, so we switched to Uberconference, and
> lost streaming. We’ll get this working for next meeting.

* Next meeting: TBD


## Present

- Ali Ijaz Sheikh
- Bryan English
- Colin Ihrig
- Deian Stefan
- Devon Rifkin
- Fraser Brown
- Hitesh Kanwathirtha
- James Snell
- Johan Bergström
- Matteo Collina
- Mikeal Rogers
- Myles Borins
- Nikita
- Rodd Vagg
- Sam Roberts
- Vladimir de Turckheim
- William Kapke


## Standup

- Those present did a quick introduction of themselves.


## Agenda

- Introductions
- What to do with the Node Security Project donation?
- What is the working group? A TLP, CWG, TWG? See #11


## Discussion

- nsp project is getting donated (not signed yet)
- Some discussion of a set of problems
- Would like a streamlined way to report vulnerabilities
- How hasn’t been worked out yet
- This group is not intended to replace the group that triages core
  vulnerabilities
- Mikeal: noted that there needs to be a clear distinction between this group
  and the core vulnerabilities group, and any infringements should be worked out
- Mikeal+Rodd think a top-level project would be appropriate, but it would be
  easier to start with a working group until more structure is needed.
- William Kapke: suggests that since nsp is already a project, bringing it into
  the foundation makes a TLP make more sense.
- Mikeal: suggests this compares more to bringing in nan, where a working group
  makes more sense. The main thing a TLP offers is the ability to spin off sub
  working groups.
- James: what are we to do? 1) maintain a vuln DB for vulns in core, node
  foundation projects, and ecosystem that will be open and available to others
  2) defining processes for that maintenance. 3) promoting security practices in
  ecosystem.
- Sam: Adam Baldwin says there is an ISO process for being a vulnerability
  coordinator
- James: does nsp have an open-source hosting code base, for the APIs?
- Sam: nsp is donating just the JSON DB dump
- Mikeal: the data set is not open source at the moment (you need a
  license), the `nsp` tool is not being donated, but is currently open source
- Mikeal: suggest we don’t have to serve the data as API, we can just manage it
  in github as json files, and leave its processing up to projects that are
  utilizing the data
- Matteo: will we do public APIs so that thirdparties can hook into them, or
  just providing JSON dumps?
- Mikeal: will evolve over time. Goal is to enable ecosystem, but we don’t want
  to be the tooling.
- James: when do we get access? What will its license be? How are we going to
  host it (github, or API, or ...)? How do we enable ecosystem to build tools on
  top? How do we maintain and make the data available? How do we make policies
  for responsible disclosure?
- Mikeal: could we start with the process for core?
- Deian: Fraser and I have disclosed some vulns to core, and want a description
  of what is a sec vuln, and not just a bug. Describing this may be difficult,
  but without a threat model, its hard to communicate. Communication with public
  is important, needs to be a clear mailing list, or email. It was hard to know
  if communication was with official committee, or just an individual on the
  committee.
- Mikeal: not sure if we will find a model
- Matteo: concerned about possibility that a package author may have disappeared
  or not be willing to fix a vuln. This is a major concern. How do we deal with
  those cases.
- Deian: sees core and ecosystem as different areas, while related in terms of
  process and goals, are different enough they may be distinct. Ecosystem in
  particular, because foundation doesn’t control code
- James: to be clear, we are not planning to actively begin researching
  vulnerabilities?
- Mikeal: if someone comes forward and wants to do research (like fuzzing with
  google tools) we should be open to it. May need to supply patches to
  ecosystem. Foundation would support the group if they want to do more active
  research
- Sam: we should discuss a what’s next
- Sam: I’ll open an issue for next meeting
- James: before next, would like clarity on work areas
- Sam: would like sample of nsp data so we can begin discussion of what to do
  with it
- James: does Baldwin want to be involved?
- Mikeal, Sam: yes
- Sam: nsp data import is one issue, another is the reporting and response
  channel for vulnerabilities from ecosystem
- Deian: reporting to security@nodejs.org was a black hole… maybe a bugzilla
  would be better?
- Mikeal: maybe a help-desk like thing, so you have a private communication
  channel, and yet something better than email
- Devon: such a thing would also offer historical information
- Sam: summary is we need a github issue tracker alternative that can contain
  vuln reports, for private communication with reporter, and to allow timed
  publishing/announcement, and after vuln mitigation is announced, can be made
  completely public for historical record
- William: maybe we can build some kind of facade over our private repo, to
  selectively publish them
- Johan: use same thing as we do in the secrets repo, use gpg encryption, and
  only share keys with some people
- Sam: I’m concerned we are building another issue tracker
- Mikeal: thinks it would just be a bot that publishes a private to public
  mirror
- Deian: doesn’t think that works, he can’t participate during early stage
- Mikeal: thinks we have automation that can allow a non-privileged user to
  interact via email with issues in an otherwise private github issue tracker
- Sam: we’ll move conversation to github
