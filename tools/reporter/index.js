'use strict'

const args = require('./cli')
const config = require('./config')
const HackerOneClient = require('./HackerOneClient')
const NswgReporter = require('./NswgReporter')
const CliPrompt = require('./CliPrompt')

// retrieve report id from command line args
const reportId = args.reportId
const silentMode = args.silent

Promise.resolve()
  .then(() => {
    if (!config.hackeroneUser || !config.hackeronePass) {
      return CliPrompt.hackeroneLoginPrompt()
    }

    return {
      hackeroneUser: config.hackeroneUser,
      hackeronePass: config.hackeronePass
    }
  })
  .then((userApiKey) => {
    const hackerOne = new HackerOneClient(userApiKey.hackeroneUser, userApiKey.hackeronePass)
    return hackerOne.getReport(reportId)
  })
  .then(report => {
    const wgReporter = new NswgReporter({ report })
    return wgReporter.get()
  })
  .then(NswgReport => {
    if (!silentMode) {
      return CliPrompt.reportPrompt(NswgReport)
    }

    return NswgReport
  })
  .then(NswgReport => {
    console.log(JSON.stringify(NswgReport, null, 2))
  })
  .catch(error => {
    console.error(error.message)
    console.error(error.stack)
    process.exit(1)
  })
