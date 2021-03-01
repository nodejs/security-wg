var fs = require('fs')

// We will fill in this object with our data
var vuln = {}

const createIndex = function (vulnDirectoryPath) {
  const files = fs.readdirSync(vulnDirectoryPath)
  getVulnDirectoryContents(files, vulnDirectoryPath)
  writeIndex(vuln, vulnDirectoryPath)
}

const getVulnDirectoryContents = function (files, vulnDirectoryPath) {
  for(file of files) {
    const filename = file.slice(-0, file.toString().indexOf('.json'))
    if(filename !== 'index') {
      const data = fs.readFileSync(vulnDirectoryPath + file)
      createVulnObject(filename, data)
    }
  }
}

const createVulnObject = function(identifier, json) {
  vuln[identifier] = JSON.parse(json)
}

const writeIndex = function(data, vulnDirectoryPath) {
  fs.writeFileSync(vulnDirectoryPath + 'index.json', JSON.stringify(data))
  
  if(vulnDirectoryPath === './vuln/core/') {
    console.log('Succesfully wrote ' + vulnDirectoryPath + 'index.json for core vulnerabilities.')
  } else if(vulnDirectoryPath === './vuln/npm/') {
    console.log('Succesfully wrote ' + vulnDirectoryPath + 'index.json for npm vulnerabilities.')
  }
}

module.exports = createIndex