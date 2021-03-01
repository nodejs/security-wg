# Node.js Ecosystem Triage Guidelines

## Introduction

The purpose of this document is to bring the Node.js Ecosystem Triage team to a common understanding of how to triage and disclose security vulnerabilities reported through the Node.js third-party modules program hosted on HackerOne (https://hackerone.com/nodejs-ecosystem).

## Why are guidelines needed?

The Node.js Ecosystem Triage team consists of volunteers with varying level of time, energy and vulnerability management experience. Documenting best practices and common understanding of core concerns when triaging issues will allow the team to provide more consistent service both for security researchers and package maintainers.

Guidelines will also be a useful resource in onboarding new triage team members. 

## What counts as a vulnerability?

HackerOne gives the following definition of a vulnerability:

```
A software bug that would allow an attacker to perform an action in violation of an expressed security policy. A bug that enables escalated access or privilege is a vulnerability. Design flaws and failures to adhere to security best practices may qualify as vulnerabilities. (...)
```

Any bug that is directly exploitable by attackers is a vulnerability.

Special case to consider are defects in libraries: if a documented or obvious way to use a library leads to an exploitable vulnerability in the correct and safe calling code, then those defects are also vulnerabilities. Some APIs are unsafe to use and are not vulnerabilities if they are clearly marked this way and if safe alternatives exist. An excellent example of this is dangerouslySetInnerHTML in React.

## What is an expressed security policy?

Packages may have different threat models and maintainers may express desired security properties in documentation. In such cases it is important to evaluate the report against those properties. For example: a JSON parsing package may not be designed to handle untrusted schema and requires data sanitization to be performed by the caller. In this case a report that violates these preconditions may not count as a vulnerability.

## What is the root cause of the vulnerability?

There are cases where the submitter notices a vulnerability in a parent package but the root cause of the vulnerability can be traced to one of the downstream dependencies. An example of this was an XSS vulnerability in the `serve` package that could be traced to lack of proper HTML escaping in the downstream `serve-handler` package. In cases such as this one, it is important to work with submitter and package maintainers to determine where a vulnerability in question is best remediated.

## Does package maintainer have to acknowledge the vulnerability?

If the triage team can contact the maintainer, then getting them to acknowledge the vulnerability before proceeding is strongly encouraged. If it was not possible to make contact, the responsibility for making a decision is on the triage team.

## Which vulnerabilities need to be disclosed?

Vulnerabilities that require users of a package to take an action, most often upgrade of the package, need to be publicly disclosed.

## What about resolution verification?

Sometimes vulnerability resolutions are partial and do not fully resolve the underlying problem. It is encouraged to facilitate collaboration between the submitter and package maintainer to verify if the resolution is full and does not lead to further security problems.

# References

HackerOne Disclosure Guidelines
https://www.hackerone.com/disclosure-guidelines

CVE Counting Rules
https://drive.google.com/file/d/1edCzKfsds79S6z411EJ5qQa-c6z2Bc4A/view 
