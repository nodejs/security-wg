'use strict'

const inquirer = require('inquirer')

class CliPrompt {
  static async hackeroneLoginPrompt () {
    let prompt

    prompt = await inquirer.prompt({
      type: 'input',
      name: 'username',
      message: 'HackerOne API Username'
    })

    const user = prompt.username || ''

    prompt = await inquirer.prompt({
      type: 'input',
      name: 'password',
      message: 'HackerOne API Password'
    })

    const pass = prompt.password || ''

    return {
      hackeroneUser: user,
      hackeronePass: pass
    }

  }

  static async reportPrompt (NswgReport = {}) {
    if (NswgReport && !NswgReport.id) {
      const prompt = await inquirer.prompt({
        type: 'input',
        name: 'id',
        message: 'nswg id'
      })

      NswgReport.id = Number.parseInt(prompt.id)
    }

    if (NswgReport && !NswgReport.vulnerable_versions) {
      const prompt = await inquirer.prompt({
        type: 'input',
        name: 'vulnerable_versions',
        message: 'vulnerable versions'
      })

      NswgReport.vulnerable_versions = prompt.vulnerable_versions ? String(prompt.vulnerable_versions) : null
    }

    if (NswgReport && !NswgReport.patched_versions) {
      const prompt = await inquirer.prompt({
        type: 'input',
        name: 'patched_versions',
        message: 'patched versions'
      })

      NswgReport.patched_versions = prompt.patched_versions ? String(prompt.patched_versions) : null
    }

    if (NswgReport) {
      if (!NswgReport.patched_versions) {
        NswgReport.recommendation = 'No fix is currently available for this vulnerability.\n\nIt is our recommendation to not install or use this module at this time.'
      } else {
        NswgReport.recommendation = `Update ${NswgReport.module_name} module to version ${NswgReport.patched_versions}`
      }
    }

    return NswgReport
  }
}

module.exports = CliPrompt