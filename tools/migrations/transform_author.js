'use strict'

const fs = require('fs');

const npmVulnerabilityPath = './vuln/npm';
const npmVulnerabilityPathNew = './vuln/npm_new';

const list = fs.readdirSync(npmVulnerabilityPath);

if (!fs.existsSync(npmVulnerabilityPathNew)) {
  fs.mkdirSync(npmVulnerabilityPathNew);
}

function parseAuthor(name) {
  const pattern = new RegExp(/^(.*) \((https?:\/\/.*)\)$|^(.*) \((.*)\)$|^(.*)$/);
  const matches = name.match(pattern);
  var name = null;
  var website = null;
  var username = null;
  if (matches[1] != undefined && matches[2] != undefined) {
    name = matches[1];
    website = matches[2];

  } else if (matches[3] != undefined && matches[4] != undefined) {
    name = matches[3];
    username = matches[4];
  } else if (matches[5] != undefined) {
    name = matches[5];
  }

  return {
    name: name,
    website: website,
    username: username
  };
}

list.forEach((filePath) => {
  const fileContents = JSON.parse(fs.readFileSync(npmVulnerabilityPath + '/' + filePath, 'utf8'));
  // console.log(fileContents.author);
  const name = fileContents.author;

  if (name != null) {
    var author = parseAuthor(name);
    fileContents.author = author;
    fs.writeFileSync(npmVulnerabilityPathNew + '/' + filePath, JSON.stringify(fileContents, null, 2) + "\n");

  }
  else {
    console.log(npmVulnerabilityPath + '/' + filePath);
  }
})


fs.renameSync(npmVulnerabilityPath, npmVulnerabilityPath + '_old');
fs.renameSync(npmVulnerabilityPathNew, npmVulnerabilityPath);
