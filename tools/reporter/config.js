'use strict'

module.exports = {
  baseUrl: process.env.NSWG_BB_BASE_URL || 'https://hackerone.com',
  apiBaseUrl: process.env.NSWG_BB_API_BASE_URL || 'https://api.hackerone.com/v1',
  hackeroneUser: process.env.NSWG_BB_API_USERNAME,
  hackeronePass: process.env.NSWG_BB_API_PASSWORD
}