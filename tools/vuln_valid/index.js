"use strict";

const vulnValidate = require("./vulnValidate");
const vulnPaths = require("../../vuln").paths;

vulnValidate.validate(vulnPaths.core, vulnValidate.coreModel);
vulnValidate.validate(vulnPaths.npm, vulnValidate.npmModel);
