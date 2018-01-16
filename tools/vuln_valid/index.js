'use strict';
const Joi = require('joi');
const Path = require('path');
const Fs = require('fs');

const vulnPath = Path.join(__dirname, '..', '..', 'vuln');
const coreVulnPath = Path.join(vulnPath, 'core');
const npmVulnPath = Path.join(vulnPath, 'npm');

const coreModel = Joi.object().keys({
    cve: Joi.array().items(Joi.string().regex(/CVE-\d{4}-\d+/)),
    ref: Joi.string().uri().optional(),
    vulnerable: Joi.string(),
    patched: Joi.string(),
    description: Joi.string(),
    overview: Joi.string(),
    author: Joi.string().optional(),
    cvss_score: Joi.string().optional(),
    cvss: Joi.string().optional()
});

const npmModel = Joi.object().keys({
    id: Joi.number(),
    cves: Joi.array().items(Joi.string().regex(/CVE-\d{4}-\d+/)),
    created_at: Joi.date(),
    updated_at: Joi.date(),
    title: Joi.string(),
    author: Joi.string().allow(null),
    module_name: Joi.string(),
    publish_date: Joi.date(),
    vulnerable_versions: Joi.string().allow('').allow(null),
    patched_versions: Joi.string().allow('').allow(null),
    slug: Joi.string(),
    overview: Joi.string(),
    recommendation: Joi.string().allow('').allow(null),
    references: Joi.string().allow('').allow(null),
    cvss_vector: Joi.string().allow('').allow(null),
    cvss_score: Joi.number().allow(null),
    coordinating_vendor: Joi.string().allow('')
});

let fail = false;

Fs.readdirSync(coreVulnPath)
    .map((x) => Path.join(coreVulnPath, x))
    .forEach((path) => {

        const vuln = JSON.parse(Fs.readFileSync(path));
        const result = Joi.validate(vuln, coreModel);
        if (result.error) {
            console.log(`File ${path}:`);
            console.log(result.error);
            fail = true;
        }
    });

Fs.readdirSync(npmVulnPath)
    .map((x) => Path.join(npmVulnPath, x))
    .forEach((path) => {

        const vuln = JSON.parse(Fs.readFileSync(path));
        const result = Joi.validate(vuln, npmModel);
        if (result.error) {
            console.log(`File ${path}:`);
            console.log(result.error);
            fail = true;
        }
    });


if (fail) {
    process.exit(1);
}
