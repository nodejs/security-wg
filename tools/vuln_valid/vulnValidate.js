"use strict";
const joi = require("joi").extend(require("joi-extension-semver"));
const path = require("path");
const fs = require("fs");

const coreModel = joi.object().keys({
  cve: joi
    .array()
    .items(joi.string().regex(/CVE-\d{4}-\d+/))
    .required(),
  ref: joi
    .string()
    .uri()
    .optional(),
  vulnerable: joi
    .semver()
    .validRange()
    .required(),
  patched: joi
    .semver()
    .validRange()
    .optional(),
  description: joi.string().optional(),
  overview: joi.string().optional(),
  author: joi.string().optional(),
  publish_date: joi
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .isoDate(),
  type: joi.string().optional(),
  cvss_score: joi.number().optional(),
  cvss: joi.string().optional(),
  reported_by: joi.string().optional(),
  affectedEnvironments: joi
  .array()
  // See: https://nodejs.org/api/os.html#osplatform
  .items(joi.string().valid("all", "aix", "darwin", "freebsd", "linux", "openbsd", "sunos", "win32", "android"))
  .min(1)
  .required()
});

const npmModel = joi.object().keys({
  id: joi.number().required(),
  cves: joi
    .array()
    .items(joi.string().regex(/CVE-\d{4}-\d+/))
    .required(),
  created_at: joi
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .required()
    .isoDate(),
  updated_at: joi
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .required()
    .isoDate(),
  title: joi
    .string()
    .max(150)
    .regex(/^[^\n]+$/)
    .required(),
  author: joi.object().keys({
    name: joi.string().required(),
    username: joi
      .string()
      .required()
      .allow(null),
    website: joi
      .string()
      .required()
      .allow(null)
  }),
  module_name: joi.string().required(),
  publish_date: joi
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .required()
    .isoDate(),
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
  patched_versions: joi
    .semver()
    .validRange()
    .allow(null)
    .required(),
  overview: joi.string().required(),
  recommendation: joi
    .string()
    .allow(null)
    .required(),
  references: joi
    .array()
    .allow(null)
    .required(),
  cvss_vector: joi
    .string()
    .allow(null)
    .required(),
  cvss_score: joi
    .number()
    .allow(null)
    .required(),
  coordinating_vendor: joi
    .string()
    .allow(null)
    .required()
});

function validateVuln(filePath, model) {
  const vuln = JSON.parse(fs.readFileSync(filePath));
  const result = joi.validate(vuln, model);
  if (result.error) {
    console.error(filePath, result.error);
    throw result.error;
  }
}

function validate(dir, model) {
 const files = fs.readdirSync(dir);
  for (const name of files) {
    // skip index.json validation
    if (name === 'index.json') continue;
    const filePath = path.join(dir, name);
    validateVuln(filePath, model);
  }
}

module.exports = {
  npmModel,
  coreModel,
  validateVuln,
  validate
};
