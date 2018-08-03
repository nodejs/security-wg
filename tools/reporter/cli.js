'use strict'

const yargs = require('yargs')

const args = yargs
  .option('reportId', {
    alias: 'r',
    describe: 'provide the HackerOne report id'
  })
  .options('silent', {
    alias: 's',
    describe: 'disable interactive mode for report data gathering'
  })
  .demandOption('reportId')
  .help()
  .version()
  .alias('h', 'help')
  .alias('v', 'version')
  .example('npm run reporter -- --reportId 12345')
  .argv

module.exports = args