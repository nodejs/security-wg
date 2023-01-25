# Vulnerability database

## Database

The Node.js Security WG maintains a vulnerability database for core Node.js as well as third party modules from the npm ecosystem.

Detailed information on the [database references](https://github.com/nodejs/security-wg/blob/master/vuln/README.md)

## Database Structure

### Node.js Core vulnerabiltiy report structure

```json
{
  "cve": [
    "CVE-YYYY-XXXX"
  ],
  "ref": "https://github.com/nodejs/node/pull/1234",
  "vulnerable": "6.x || 4.x",
  "patched": "^6.7.0 || ^4.6.0",
  "description": "vulnerability description",
  "overview": "attack overview\n\n"
}
```

### Node.js Ecosystem vulnerabiltiy report structure

```json
{
  "id": 123,
  "title": "Denial of Service",
  "overview": "attack overview",
  "created_at": "2018-02-22",
  "updated_at": "2018-02-22",
  "publish_date": "2018-02-22",
  "author": {	
    "name": "John Smith",	
    "website": "https://www.github.com/john-smith",	
    "username": null
  },
  "module_name": "some-module-name",
  "cves": [
    "CVE-YYYY-XXXX"
  ],
  "vulnerable_versions": "<1.0.0",
  "patched_versions": ">=1.0.0",
  "recommendation": "Update to version 1.0.0 or later",
  "references": [
    "https://hackerone.com/reports/XXXX",
  ],
  "cvss_vector": "CVSS:3.0/AV:N/AC:L/PR:L/UI:N/S:U/C:N/I:N/A:H",
  "cvss_score": 6.5,
  "coordinating_vendor": null
}
```

### Validating reports

The Security WG employs a static code analysis tool that runs in CI for all pull requests to validate the correct structure when new vulnerabilities are introduced.

You may make use of the same tool which is available [here](https://github.com/nodejs/security-wg/blob/main/tools/vuln_valid/index.js) either in your own tooling setup or from this repository by running `npm test`.


### Database structure changes

To support a maintainable and enhanced vulnerabilities database, the Security WG may make changes to the structure of existing reports in order to make proper accommodations to evolving needs of the community.

As we set out to re-structure the vulnerability database we will do our best to communicate the change broadly as possible and provide a reasonable time to get involved in the discussion.

We will announce an upcoming change in the following ways:
- A new issue in the repository (see example reference: https://github.com/nodejs/security-wg/issues/345)
- We will contact the list of known database users (see section below) and alert them of the change, inviting them to participate in the discussion before changes are merged.
- By social media, using twitter, to further broadcast the change through some of the Security WG's twitter accounts.
- By announcing the upcoming change on the official Node.js website (https://nodejs.org) - PR the announcement to the [Node.js website build file](https://github.com/nodejs/nodejs.org/blob/master/build.js), specifically updating the banner object in `getSource()` function to reflect the announcement details.

Time window for introducing changes:
- Changes that affect existing database fields will provide a 60 days time-frame through a process of requesting comments from any party for the affecting change, due in 30 days, following an announcement for the change to be effective within another 30 days.
- Changes that extend the database fields with newly proposed fields will be added as the proposed pull request is merged.

Note: we recommend subscribing to the repository's issue tracker in order to receive updates in a timely manner for both new issues that may influence database changes, as well as new vulnerabilities pushed to the database or changes made to existing entries. Also, all pull requests that add a new vulnerability are labled with `vulnerabilities` which makes them easily filtered and searchable.

## Database Users

The following is a list of users or organizations which opt-in to be listed as users of the vulnerability database:

- [ ] Customer 1 (contact: customer@example.com)


Note: if you wish to be added to the list of known database users you may open a pull request to this document with your contact details.

## Security researchers

The Security Working Group and the Node.js community is kept safe with the help of many security researchers who help
identify vulnerabilities in the core and in the ecosystem.

The list of these people can be found on HackerOne:
* for Node.js core: https://hackerone.com/nodejs/thanks
* for Node.js ecosystem: https://hackerone.com/nodejs-ecosystem/thanks

## License of the database

The database of vulnerabilities is provided under the MIT license.
