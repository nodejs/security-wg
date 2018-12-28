'use strict'

const NswgReporter = require("../../../tools/reporter/NswgReporter")

const mockData = require("../../../__mocks__/mockData")
const report = mockData.report
const reporter = new NswgReporter({report})
let wgReport = {}
let expectedWgReport = mockData.wgReport

describe("Testing NswgReporter", ()=> {
  test("Testing getTitle", () => {
    expect(reporter.getTitle()).toBe("[TBD]")
  })
  test("Testing getOverview", () => {
    expect(reporter.getOverview()).toBe("overview")
  })
  test("Testing getCreatedAt", () => {
    expect(reporter.getCreatedAt()).toBe("2018-07-13")
  })
  test("Testing getUpdatedAt", () => {
    expect(reporter.getUpdatedAt()).toBe("1970-01-01")
  })
  test("Testing getPublishAt", () => {
    expect(reporter.getPublishAt()).toBe("2018-08-22")
  })
  test("Testing getAuthorUsername", () => {
    expect(reporter.getAuthorUsername()).toEqual({"name": "asdfghjkl", "username": "asdfghjkjl", "website": null})
  })
  test("Testing getModuleName", () => {
    expect(reporter.getModuleName()).toBe("[TBD]")
  })
  test("Testing getCVEs", () => {
    expect(reporter.getCVEs()).toBe(null)
  })
  test("Testing getVulnerableVerison", () => {
    expect(reporter.getVulnerableVerison()).toBe(null)
  })
  test("Testing getPatchedVersion", () => {
    expect(reporter.getPatchedVersion()).toBe(null)
  })
  test("Testing getRecommendation", () => {
    expect(reporter.getRecommendation()).toBe("update [TBD] to null or higher")
  })
  test("Testing getReferences", () => {
    expect(reporter.getReferences()).toEqual(["https://hackerone.com/reports/123456"])
  })
  test("Testing getCVSS", () => {
    expect(reporter.getCVSS()).toBe("[TBD]")
  })
  test("Testing getCVSSScore", () => {
    expect(reporter.getCVSSScore()).toBe("[TBD]")
  })
  test("Testing get for wgReport", async() => {
    await reporter.get()
      .then((rep)=> {
        wgReport = rep
        expect(wgReport).toEqual(expectedWgReport)   
      })
  })
})

module.exports = reporter
