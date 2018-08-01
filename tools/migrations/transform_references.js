'use strict'

const fs = require('fs');

const npmVulnerabilityPath = './vuln/npm';
const npmVulnerabilityPathNew = './vuln/npm_new';

const list = fs.readdirSync(npmVulnerabilityPath);

if (!fs.existsSync(npmVulnerabilityPathNew)) {
  fs.mkdirSync(npmVulnerabilityPathNew);
}



function parseReferences(referencesString) {

  const pattern = new RegExp(/(https?:\/\/[^\s]+)/g);
  const matches = referencesString.match(pattern);
  if (matches !== null) {
    return matches;
  } else {
    console.log(referencesString);
    return null;
  }
}


list.forEach((filePath) => {
  const fileContents = JSON.parse(fs.readFileSync(npmVulnerabilityPath + '/' + filePath, 'utf8'));
  const referencesString = fileContents.references;

  if (referencesString != null) {
    var references = parseReferences(referencesString);
    fileContents.references = references;
  }
  else {
    console.log(npmVulnerabilityPath + '/' + filePath);
  }
  fs.writeFileSync(npmVulnerabilityPathNew + '/' + filePath, JSON.stringify(fileContents, null, 2) + "\n");
})


fs.renameSync(npmVulnerabilityPath, npmVulnerabilityPath + '_old');
fs.renameSync(npmVulnerabilityPathNew, npmVulnerabilityPath);
