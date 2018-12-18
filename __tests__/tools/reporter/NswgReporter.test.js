'use strict'

const NswgReporter = require("../../../tools/reporter/NswgReporter")

const report = { 
  data: { 
    id: '123456',
    type: 'report',
    attributes: { 
      title : "overview",
      state: 'resolved',
      created_at: '2018-07-13T10:04:52.180Z',
      triaged_at: null,
      closed_at: null,
      last_reporter_activity_at: null,
      first_program_activity_at: null,
      last_program_activity_at: null,
      bounty_awarded_at: null,
      swag_awarded_at: null,
      disclosed_at: '2018-08-22T07:48:35.622Z',
      last_public_activity_at: null,
      last_activity_at: null,
      cve_ids: null 
    },
    relationships: { 
      reporter: [Object],
      program: [Object],
      swag: [Object],
      attachments: [Object],
      activities: [Object],
      bounties: [Object],
      summaries: [Object] } },
 reporter: { 
    id: 123456,
    username: 'asdfghjkjl',
    name: 'asdfghjkl',
    bio: null,
    website: null,
    location: null,
    created_at: '2018-07-04T13:30:25.133Z',
    url: 'https://hackerone.com/asdfghjkl',
    anc_triager: false,
    hackerone_triager: false,
    profile_picture_urls: { 
      small: '/assets/avatars/default-12345.png',
      medium: '/assets/avatars/default-123456.png',
      xtralarge: '/assets/avatars/default-1234567.png' },
    disabled: false,
    report_count: 6,
    target_count: 1,
    reputation: 142,
    rank: 2630,
    signal: 7,
    impact: null,
    signal_percentile: 96,
    impact_percentile: null,
    total_mentees: 0,
    mentor: null } 
  }

const reporter = new NswgReporter({report})
let wgReport = {}

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
    expect(reporter.getUpdatedAt()).toBe(null)
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
  test("Testing get for wgReport", () => {
    return Promise
      .resolve().then(() => {
        return reporter.get()
      }).then((rep)=> {
        wgReport = rep
        expect(wgReport).toEqual({"author": {"name": "asdfghjkl", "username": "asdfghjkjl", "website": null}, "coordinating_vendor": null, "created_at": "2018-07-13", "cves": null, "cvss_score": "[TBD]", "cvss_vector": "[TBD]", "id": 0,"module_name": "[TBD]", "overview": "overview", "patched_versions": null, "publish_date": "2018-08-22", "recommendation": "update [TBD] to null or higher", "references": ["https://hackerone.com/reports/123456"], "title": "[TBD]", "updated_at": null, "vulnerable_versions": null})   
      })
  })
})

module.exports = reporter
