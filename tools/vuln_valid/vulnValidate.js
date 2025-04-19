'use strict';

const Joi = require('joi')
const path = require('node:path');
const fs = require('node:fs');

const coreModel = Joi.object({
  cve: Joi
    .array()
    .items(Joi.string().regex(/CVE-\d{4}-\d+/))
    .required(),
  ref: Joi
    .string()
    .uri()
    .optional(),
  vulnerable: Joi
    .string()
    .valid(),
  patched: Joi
    .string()
    .optional(),
  description: Joi.string().optional(),
  overview: Joi.string().optional(),
  author: Joi.string().optional(),
  publish_date: Joi
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/)
    .optional()
    .isoDate(),
  type: Joi.string().optional(),
  cvss_score: Joi.number().optional(),
  cvss: Joi.string().optional(),
  reported_by: Joi.string().optional(),
  affectedEnvironments: Joi
    .array()
    // See: https://nodejs.org/api/os.html#osplatform
    .items(Joi.string().valid("all", "aix", "darwin", "freebsd", "linux", "openbsd", "sunos", "win32", "android"))
    .min(1)
    .required(),
  severity: Joi
    .string()
    .regex(/^(unknown)|(low)|(medium)|(high)|(critical)$/)
    .required()
});

function validateVuln(filePath, model) {
  const vuln = JSON.parse(fs.readFileSync(filePath));
  const result = coreModel.validate(vuln);
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
  coreModel,
  validateVuln,
  validate
};
