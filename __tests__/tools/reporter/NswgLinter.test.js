'use strict'

const NswgLinter = require("../../../tools/reporter/NswgLinter")
const report = require("../../../__mocks__/mockData").report

describe("TestingNswgLinter",()=>{
    test("Testing lint", () => {
        expect(NswgLinter.lint(report).title).toMatch(/undefined/)
    })
})