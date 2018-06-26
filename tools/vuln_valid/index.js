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
  created_at: joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required().isoDate(),
  updated_at: joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required().isoDate(),
  title: joi.string().required(),
  title: joi.string().max(150).regex(/^[^\n]+$/).required(),
  author: joi.string().allow(null).required(),
  module_name: joi.string().required(),
  publish_date: joi.string().regex(/^\d{4}-\d{2}-\d{2}$/).required().isoDate(),
  vulnerable_versions: joi.alternatives().when("patched_versions", {
    is: null,
    then: joi
      .semver()
      .validRange()
      .required(),
    otherwise: joi
      .semver()
      .validRange()
      .allow(null)
      .required()
  }),
  patched_versions: joi.semver().validRange().allow(null).required(),
  overview: joi.string().required(),
  recommendation: joi.string().allow(null).required(),
  references: joi.array().allow(null).required(),
  cvss_vector: joi.string().allow(null).required(),
  cvss_score: joi.number().allow(null).required(),
  coordinating_vendor: joi.string().allow(null).required()
});

function validate(dir, model) {
  fs.readdirSync(dir)
    .forEach((name) => {
      const filePath = path.join(dir, name);
      console.log('Validate:', filePath);
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
