'use strict'

const CliPrompt = require('../../../tools/reporter/CliPrompt')
const wgReport = require('../../../__mocks__/mockData').wgReport

jest.mock('inquirer')

describe("Testing CliPrompt", () => {
    test("Testing hackeroneLoginPrompt", async() => {
        expect(await CliPrompt.hackeroneLoginPrompt()).toEqual({hackeronePass: "", hackeroneUser: ""})
    })
    test("Testing reportPrompt", async() => {
        expect(await CliPrompt.reportPrompt(wgReport)).toBe(wgReport)
    })
})