'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert');
const path = require('node:path');

const vulnValid = require('../tools/vuln_valid/vulnValidate');

const vulnPathsPass = path.resolve('./fixtures/valid-vuln');
const vulnPathsFail = path.resolve('./fixtures/wrong-vuln');

describe('Testing vuln_valid', () => {
  it('Testing validate for core', () => {
    // assert.doesNotThrow(() =>
    //   vulnValid.validateVuln(
    //     vulnPathsPass,
    //     vulnValid.coreModel
    //   )
    // );
    // assert.throws(() =>
    //   vulnValid.validateVuln(
    //     vulnPathsFail,
    //     vulnValid.coreModel
    //   )
    // );
  });
});
