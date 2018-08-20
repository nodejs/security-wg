const path = require('path')
const fs = require('fs')

if (!process.argv[2]) {
  usageExit()
}

let file = process.argv[2]

if (path.extname(file) !== '.json') {
  file = `${file}.json`
}

try {
  fs.accessSync(file, fs.constants.R_OK)
} catch (err) {
  file = path.join('vuln/core', file)
  try {
    fs.accessSync(file, fs.constants.R_OK)
  } catch (err) {
    usageExit()
  }
}

const vulnData = JSON.parse(fs.readFileSync(file, 'utf8'))

vulnData.cve.forEach(printCve)

function usageExit () {
  console.error('Usage: cve_submission_format <path/to/vuln.json>')
  process.exit(1)
}

function toPlainVersions (versionRanges) {
  return versionRanges
}

function printCve (cve) {
  console.log(`
[CVEID]: ${cve}
[PRODUCT]: Node.js
[VERSION]: ${toPlainVersions(vulnData.vulnerable)}
[PROBLEMTYPE]: ${vulnData.type || ''}
[REFERENCES]: ${Array.isArray(vulnData.ref) ? vulnData.ref.join(' ') : vulnData.ref}
[DESCRIPTION]: ${vulnData.overview.replace(/\n/g, ' ')}
[ASSIGNINGCNA]: Node.js Foundation

`)
  console.log('\nYou should fix the [VERSION] to be human-readable, e.g.: "All versions of Node.js prior to 6.14.4, 8.11.4 and 10.9.0"')
}
