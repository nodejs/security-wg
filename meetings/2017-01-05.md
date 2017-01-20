# Security WG meeting 2017-01-05

* GitHub issue: https://github.com/nodejs/security-wg/issues/13
* Meeting video: (not available, sorry, because of technical difficulties)
* Previous meeting: https://github.com/nodejs/security-wg/pull/15


## Present

* Bradley Meck @bmeck
* Colin Ihrig @cjihrig
* Gibson Fahnestock @gibfahn
* James Snell @jasnell
* Michael Dawson @mdawson
* Sam Roberts @sam-github
* Vladimir de Turckheim @vdeturckheim

## Review of last meeting

- An issue has been opened regarding the handover of the data from the NSP.
  https://github.com/nodejs/security-wg/issues/16 . ATM there is no update on
  that topic. We should invite Adam to the next call to walk us through the
  data, and their maintenance process.

- There was discussion in last meeting of issues with the transparency and
  tracability of the vulnerability reporting process:
  https://github.com/nodejs/security-wg/issues/17

- It was requested that Node.js make a statement on what is or is not a
  vulnerability, a “threat model”.
  https://github.com/nodejs/security-wg/issues/18

- Should this group incorporate as a TSC working group, or a CTC working group?
  - Michael: if it includes security data, that isn’t under “core”, so it must
    be part of the TSC, or both?
  - James: working on the process/policy of vulnerability reports is different
    from fixing the bugs, so the process management could be TSC, and the fixing
    of the vulns would remain with CTC
  - Sam: anyone else have an opinion?
  - Vladimir: neutral
  - Sam: see https://github.com/nodejs/TSC/issues/175

- James: does anyone want to take a stab at proposing a WG mandate?
  - Sam: will open a PR against sec-wg, and put proposed charter in the README.md

## Standup

- Bradley: not much to say, just joining
- Colin: nothing security related
- James: nothing specific, have had conversations with Bradley about package
  signing
- Michael: keeping on top of discussions, experimenting with module signing
- Vladimir: mostly on vacation, nothing specific to the work group, looking at
  mongodb vuln injection (article)
- Gibson: nothing security related
- Sam: organization stuff for sec-wg, I can land PRs and close issues now, and
  add team members

## Agenda

### Start talks about https://github.com/dimich-g/webpackage

From https://github.com/nodejs/security-wg/issues/13#issuecomment-270702851:

> @groundwater @jasnell, and @bmeck have started looking a possible avenue for
> code signing in the future


- Bradley: mostly wants to know who to talk to about this. Web WG (?) are trying
  to make a webpackage standard for distributing code to browsers. Would be good
  if node/electron/browsers always used the same package format. Electron is OK
  with moving to a new format. Does this WG need input into the package
  format? James, comments?
- James: Not really
- Michael: replacement for npm package format?
- Bradley: no, not intended
- Michael: so how would we use this package format?
- Bradley: could do code-signing, so lodash (for example) is known to be signed.
  I also want self-extracting binaries.
- Michael: without npm integration, how would a node user leverage this?
- Bradley: mostly a resource aggregation system, its a “fs in a single-file
  bundle”.
- Sam: not seeing how this is useful to node users who use npm
- Bradley: an npm package’s contents could be a webpack bundle, in which case,
  require() would need to support loading js from the webpack file
- Bradley: would need to specify trusted authorities who could have signed the
  webpack
- Bradley: would like to see security analysis of the webpack format
- Sam: reasonable, the W3C is inventing a new encrypted file format, getting
  vuln researchers to look at it critically would be a good idea. cf.
  W3C: https://w3ctag.github.io/packaging-on-the-web/
- James: suggests that an EPS should be opened and discussion should be there
- Michael: agrees
