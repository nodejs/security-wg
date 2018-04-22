'use strict'
const chalk = require('chalk')

class NswgLinter {
  static lint (NswgReport = {}) {
    if (!NswgReport.title || NswgReport.title === '[TBD]') {
      NswgReport.title = chalk.yellow(NswgReport.title)
    }

    // console.log(JSON.stringify(NswgReport, null, 2))
    return NswgReport
  }
}

module.exports = NswgLinter