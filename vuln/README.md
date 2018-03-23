# Node.js Core and Ecosystem vulnerabilities

This directory contains two lists of disclosed vulnerabilities:
* core: Vulnerabilities affecting Node.js core
* npm: Vulnerabilities affecting third party modules


# Reference

## Core

Core vulnerabilities are to be referred by their CVE number or as:
```
NSWG-COR-<ID>
```
Where `<ID>` is the number used in the name of the json file holding the vulnerability.
For instance, CVE-2016-6304 can be referred as `NSWG-COR-7`.

## Ecosystem

Ecosystem vulnerabilities are to be referred by their CVE number or as:
```
NSWG-ECO-<ID>
```
Where `<ID>` is the number used in the name of the json file holding the vulnerability.
For instance, CVE-2018-3726 can be referred as `NSWG-COR-374`.

## Usage

Multiple CVE numbers can be assigned to one single NSWG report. Therefore,
NSWGs should always be favored against any other system when referring to a Node.js core
or ecosystem vulnerability.
