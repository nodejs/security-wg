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

module.exports = {
  reportData, 
  reportUserData
}
