'use strict'

const NswgLinter = require("../../../tools/reporter/NswgLinter")
const report = require("../../../__mocks__/mockData").report

describe("TestingNswgLinter",()=>{
    test("Testing lint", () => {
        expect(NswgLinter.lint(report).title).toBe('\u001b[33mundefined\u001b[39m')
    })
})