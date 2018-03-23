'use strict';
const joi = require('joi').extend(require('joi-extension-semver'));
const path = require('path');
const fs = require('fs');

const vulnPaths = require('../../vuln').paths;

const coreModel = joi.object().keys({
  cve: joi.array().items(joi.string().regex(/CVE-\d{4}-\d+/)).required(),
  ref: joi.string().uri().optional(),
  vulnerable: joi.semver().validRange().required(),
  patched: joi.semver().validRange().optional(),
  description: joi.string().optional(),
  overview: joi.string().optional(),
  author: joi.string().optional(),
  cvss_score: joi.string().optional(),
  cvss: joi.string().optional()
});

const npmModel = joi.object().keys({
  id: joi.number().required(),
  cves: joi.array().items(joi.string().regex(/CVE-\d{4}-\d+/)).required(),
  created_at: joi.date().required(),
  updated_at: joi.date().required(),
  title: joi.string().required(),
  author: joi.string().allow(null).required(),
  module_name: joi.string().required(),
  publish_date: joi.date().required(),
  vulnerable_versions: joi.semver().validRange().allow('').allow(null).required(),
  patched_versions: joi.semver().validRange().allow('').allow(null).required(),
  slug: joi.string().required(),
  overview: joi.string().required(),
  recommendation: joi.string().allow('').allow(null).required(),
  references: joi.string().allow('').allow(null).required(),
  cvss_vector: joi.string().allow('').allow(null).required(),
  cvss_score: joi.number().allow(null).required(),
  coordinating_vendor: joi.string().allow('').required()
});

function validate(dir, model) {
  fs.readdirSync(dir)
    .forEach((name) => {
      const filePath = path.join(dir, name);
      try {
        const vuln = JSON.parse(fs.readFileSync(filePath));
        const result = joi.validate(vuln, model);
        if (result.error) {
          throw result.error;
        }
      } catch (err) {
        console.log(`File ${filePath}:`);
        console.log(err);
        process.exitCode = 1;
      }
    });
}

validate(vulnPaths.core, coreModel);
validate(vulnPaths.npm, npmModel);
