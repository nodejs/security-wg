'use strict'

const HackerOneClient =  require("../../../tools/reporter/HackerOneClient")
const client = new HackerOneClient("mockuser","asdfghjkl1234567890")
const mockData = require("../../../__mocks__/mockData")

jest.mock('axios')

describe("Testing HackerOneClient", () => {
  test("Testing getReport", async() => {
    const report = await client.getReport(123456)
    const expectedReport = {
      data : mockData.reportData.data.data,
      reporter : mockData.reportUserData.data
    }
    expect(report).toEqual(expectedReport)
  })

  test("Testing getReportUserId", () => {
    const userId = client.getReportUserId(mockData.reportData)
    expect(userId).toBe("1234asdf")
  })
})
