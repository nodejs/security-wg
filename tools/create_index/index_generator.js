const fs = require('node:fs')
const satisfies = require('semver/functions/satisfies')

// We will fill in this object with our data
let vuln = {}

const createIndex = function (vulnDirectoryPath) {
  const files = fs.readdirSync(vulnDirectoryPath)
  getVulnDirectoryContents(files, vulnDirectoryPath)
  writeIndex(vuln, vulnDirectoryPath)
}

const supportedVersions = ['14.0.0', '16.0.0', '18.0.0', '19.0.0']

const supportedVersionAffected = function (json) {
  for (const version of supportedVersions) {
    if (satisfies(version, json.vulnerable)) {
      return true
    }
  }
  return false
}

const getVulnDirectoryContents = function (files, vulnDirectoryPath) {
  for(file of files) {
    const filename = file.slice(-0, file.toString().indexOf('.json'))
    if(filename !== 'index') {
      const data = fs.readFileSync(vulnDirectoryPath + file)
      const json = JSON.parse(data)
      if (supportedVersionAffected(json)) {
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
