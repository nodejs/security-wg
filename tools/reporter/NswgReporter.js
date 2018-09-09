'use strict'

const config = require('./config')

class NswgReporter {
  constructor ({ report } = {}) {
    this.report = report
    this.reportId = report.data.id
    this.baseURL = config.baseUrl
  }

  async get () {
    if (!this.report) {
      throw new Error('no report provided')
    }

    const wgReport = {}
    wgReport['id'] = 0
    wgReport['title'] = this.getTitle()
    wgReport['overview'] = this.getOverview()
    wgReport['created_at'] = this.getCreatedAt()
    wgReport['updated_at'] = this.getUpdatedAt()
    wgReport['publish_date'] = this.getPublishAt()

    // @TODO missing twitter
    wgReport['author'] = this.getAuthorUsername()
    wgReport['module_name'] = this.getModuleName()

    wgReport['cves'] = this.getCVEs()

    // @TODO missing versions information in report
    wgReport['vulnerable_versions'] = this.getVulnerableVerison()
    wgReport['patched_versions'] = this.getPatchedVersion()
    wgReport['recommendation'] = this.getRecommendation()
    wgReport['references'] = this.getReferences()
    wgReport['cvss_vector'] = this.getCVSS()
    wgReport['cvss_score'] = this.getCVSSScore()
    wgReport['coordinating_vendor'] = null

    return wgReport
  }

  getTitle () {
    if (this.report.data && this.report.data.relationships && this.report.data.relationships.weakness) {
      return this.report.data.relationships.weakness.data.attributes.name
    }

    return '[TBD]'
  }

  getOverview () {
    return this.report.data.attributes.title
  }

  getCreatedAt () {
    return this.formatDate(this.report.data.attributes.created_at)
  }

  getUpdatedAt () {
    return this.formatDate(this.report.data.attributes.last_public_activity_at)
  }

  getPublishAt () {
    return this.formatDate(this.report.data.attributes.disclosed_at)
  }

  getAuthorUsername () {
    const name = this.report.reporter.name
      ? this.report.reporter.name
      : this.report.data.relationships.reporter.data.attributes.username

    const username = this.report.reporter.username
      ? this.report.reporter.username
      : null

    const website = this.report.reporter.website
      ? this.report.reporter.website
      : null

    return {
      name,
      website,
      username
    }
  }

  getCVEs () {
    return this.report.data.attributes.cve_ids
  }

  getModuleName () {
    if (this.report.data && this.report.data.relationships && this.report.data.relationships.structured_scope) {
      return this.report.data.relationships.structured_scope.data.attributes.asset_identifier
    }

    return '[TBD]'
  }

  getReferences () {
    return new Array(`${this.baseURL}/reports/${this.reportId}`)
  }

  getRecommendation () {
    const asset = this.getModuleName()
    const patchedVersion = this.getPatchedVersion()
    return `update ${asset} to ${patchedVersion} or higher`
  }

  getPatchedVersion () {
    return null
  }

  getVulnerableVerison () {
    return null
  }

  getSlug () {
    const moduleName = this.getModuleName()
      .toString()
      .toLowerCase()
      .split(' ')
      .join('-')
    const title = this.getTitle().split(' ').join('-').toLowerCase()
    return `${moduleName}-${title}`
  }

  getCVSS () {

    let cvssAttributes
    if (this.report.data && this.report.data.relationships && this.report.data.relationships.severity) {
      cvssAttributes = this.report.data.relationships.severity.data.attributes
    } else {
      return '[TBD]'
    }

    // ['AV', 'AC', 'PR', 'UI', 'S', 'C', 'I', 'A']
    const cvss = []

    cvss.push(
      `AV:${this.convertMetricsToCvss(cvssAttributes['attack_vector'])}`
    )
    cvss.push(
      `AC:${this.convertMetricsToCvss(cvssAttributes['attack_complexity'])}`
    )
    cvss.push(
      `PR:${this.convertMetricsToCvss(cvssAttributes['privileges_required'])}`
    )
    cvss.push(
      `UI:${this.convertMetricsToCvss(cvssAttributes['user_interaction'])}`
    )
    cvss.push(`S:${this.convertMetricsToCvss(cvssAttributes['scope'])}`)
    cvss.push(
      `C:${this.convertMetricsToCvss(cvssAttributes['confidentiality'])}`
    )
    cvss.push(`I:${this.convertMetricsToCvss(cvssAttributes['integrity'])}`)
    cvss.push(`A:${this.convertMetricsToCvss(cvssAttributes['availability'])}`)

    const score = `CVSS:3.0/${cvss.join('/')}`
    return score
  }

  getCVSSScore () {
    if (this.report.data && this.report.data.relationships && this.report.data.relationships.severity) {
      return this.report.data.relationships.severity.data.attributes.score
    } else {
      return '[TBD]'
    }
  }

  getWeaknessData () {
    return this.report.data.relationships.weakness.data
  }

  convertMetricsToCvss (metricScore) {
    return String(metricScore).substr(0, 1).toUpperCase()
  }

  formatDate (date) {
    if (!date) {
      date = null
    }

    const myDate = new Date(date)
    const month = myDate.getMonth() + 1 < 10
      ? `0${myDate.getMonth() + 1}`
      : myDate.getMonth() + 1
    const dayOfMonth = myDate.getDate() < 10
      ? `0${myDate.getDate()}`
      : myDate.getDate()
    const formattedDate = `${myDate.getFullYear()}-${month}-${dayOfMonth}`

    return formattedDate
  }
}

module.exports = NswgReporter
