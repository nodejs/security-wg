'use strict'

const request = require('axios')
const config = require('./config')

class HackerOneClient {
  constructor(tokenId, tokenSecret) {
    this.auth = {
      tokenId,
      tokenSecret
    }

    request.defaults.auth = {
      username: this.auth.tokenId,
      password: this.auth.tokenSecret
    }
  }

  /**
   * Get report by ID
   * @param {string} reportId
   * @return {object} report object
   */
  async getReport(reportId) {
    const reportData = await request.get(`${config.apiBaseUrl}/reports/${reportId}`)
    const userId = this.getReportUserId(reportData)
    const reportUserData = await request.get(`${config.baseUrl}/${userId}`, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    })

    const result = {
      data: reportData.data.data,
      // @TODO API not implemented yet by HackerOne team
      // cves: reportDataExtended.data.cve_ids,
      reporter: reportUserData.data
    }

    return result
  }

  getReportUserId(reportData) {
    return reportData.data.data.relationships.reporter.data.attributes.username
  }
}

module.exports = HackerOneClient
