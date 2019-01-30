"use strict";

const vulnValid = require("../../tools/vuln_valid/vulnValidate");

const vulnPathsPass = require("../../__mocks__/mockVuln/pass").paths;
const vulnPathsFail = require("../../__mocks__/mockVuln/fail").paths;

describe("Testing vuln_valid", () => {
  test("Testing validate for core", async () => {
    expect(() =>
      vulnValid.validateVuln(
        vulnPathsPass.core + "/1.json",
        vulnValid.coreModel
      )
    ).not.toThrow();
    expect(() =>
      vulnValid.validateVuln(
        vulnPathsFail.core + "/1.json",
        vulnValid.coreModel
      )
    ).toThrow();
  });
  test("Testing validate for npm", async () => {
    expect(() =>
      vulnValid.validateVuln(vulnPathsPass.npm + "/1.json", vulnValid.npmModel)
    ).not.toThrow();
    expect(() =>
      vulnValid.validateVuln(vulnPathsFail.core + "/1.json", vulnValid.npmModel)
    ).toThrow();
  });
});
