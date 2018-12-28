const reportData = { 
  status: 200,
  statusText: 'OK',
  data:{ 
    data: { 
      id: '123456',
      type: 'report',
      attributes: [Object],
      relationships: {
        reporter: {
          data: {
            attributes: {
              username: "1234asdf"
            }
          }
        }
      }
    }
  }
}

const reportUserData = { 
  status: 200,
  statusText: 'OK',
  data: { 
    id: 1234567,
    username: 'asgerf',
    name: 'asgerf',
    bio: null,
    website: null,
    location: null,
    created_at: '2018-07-04T13:30:25.133Z',
    url: 'https://testhackerone.com/asdf1234',
    anc_triager: false,
    hackerone_triager: false,
    profile_picture_urls: { 
      small: '/assets/avatars/default-123456.png',
      medium: '/assets/avatars/default-123456.png',
      xtralarge: '/assets/avatars/default-123456.png' },
    disabled: false,
    report_count: 10000000,
    target_count: 10000000,
    reputation: 10000000,
    rank: 10000000,
    signal: 1000000,
    impact: null,
    signal_percentile: 100,
    impact_percentile: null,
    total_mentees: 0,
    mentor: null 
  } 
}

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

  const wgReport = {
    "author": {
      "name": "asdfghjkl", 
      "username": "asdfghjkjl", 
      "website": null
    }, 
    "coordinating_vendor": null, 
    "created_at": "2018-07-13", 
    "cves": null, 
    "cvss_score": "[TBD]", 
    "cvss_vector": "[TBD]", 
    "id": 0,
    "module_name": "[TBD]", 
    "overview": "overview", 
    "patched_versions": null, 
    "publish_date": "2018-08-22", 
    "recommendation": "update [TBD] to null or higher", 
    "references": ["https://hackerone.com/reports/123456"], 
    "title": "[TBD]", 
    "updated_at": "1970-01-01", 
    "vulnerable_versions": null
  }

module.exports = {
  report,
  reportData, 
  reportUserData, 
  wgReport
}
