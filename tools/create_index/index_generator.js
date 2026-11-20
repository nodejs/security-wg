const fs = require('node:fs')
const intersects = require('semver/ranges/intersects')
const nv = require('@pkgjs/nv')

// We will fill in this object with our data
let vuln = {}

const createIndex = async function (vulnDirectoryPath) {
  const files = fs.readdirSync(vulnDirectoryPath)
  const majors = await supportedMajors()
  getVulnDirectoryContents(files, vulnDirectoryPath, majors)
  writeIndex(vuln, vulnDirectoryPath)
}

const supportedMajors = async function () {
  const versions = await nv('supported')
  return versions.map((v) => v.major)
}

// Keep a vulnerability if it affects any version of a supported release line.
// Comparing against the whole line (e.g. `24.x`) rather than the latest release
// of that line also keeps ranges such as `<24.5.0`, which do not affect the
// latest release but still affect older versions of a supported line.
const supportedVersionAffected = function (json, majors) {
  // NPM vulns don't have a vulnerable property
  if (!json.vulnerable) {
    return true
  }
  return majors.some((major) => intersects(`${major}.x`, json.vulnerable))
}

const getVulnDirectoryContents = function (files, vulnDirectoryPath, majors) {
  for(file of files) {
    const filename = file.slice(-0, file.toString().indexOf('.json'))
    if(filename !== 'index') {
      const data = fs.readFileSync(vulnDirectoryPath + file)
      const json = JSON.parse(data)
      if (supportedVersionAffected(json, majors)) {
        createVulnObject(filename, json)
      }
    }
  }
}

const createVulnObject = function(identifier, json) {
  vuln[identifier] = json
}

const writeIndex = function(data, vulnDirectoryPath) {
  fs.writeFileSync(vulnDirectoryPath + 'index.json', JSON.stringify(data, null, 2))

  if(vulnDirectoryPath === './vuln/core/') {
    console.log('Succesfully wrote ' + vulnDirectoryPath + 'index.json for core vulnerabilities.')
  } else if(vulnDirectoryPath === './vuln/npm/') {
    console.log('Succesfully wrote ' + vulnDirectoryPath + 'index.json for npm vulnerabilities.')
  }
}

module.exports = createIndex
module.exports.supportedVersionAffected = supportedVersionAffected
