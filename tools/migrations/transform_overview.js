'use strict'

const fs = require("fs");

// Files in Use
const npmVulnPath = "./vuln/npm"; // Original File Path
const npmVulnNewPath = "./vuln/npm_new";

// Check if npm_new folder exists
if (!fs.existsSync(npmVulnNewPath)){
    fs.mkdirSync(npmVulnNewPath);
}

// List of all the files in the /vuln/npm folder
const files = fs.readdirSync(npmVulnPath);

//Pick up the overview from the file and parse it to return the changed string
function parseOverview(file){
    
    if (file.overview != null){
        var overview = file.overview;
        overview = overview.replace(/\n/g,'    ');
        overview = overview.replace(/"/g,'');
        overview = overview.replace(/'/g,'');
    }
    return overview
}

files.forEach(function(file){
    var filePath = npmVulnPath + "/" + file;
    var fileNewPath = npmVulnNewPath  + "/" + file;

    file = fs.readFileSync(filePath,"UTF-8");
    var fileObject = JSON.parse(file);

    var overview = parseOverview(fileObject);
    if (overview != null) {
        fileObject.overview = overview;
    } else {
        console.log(filePath);
    }
    fs.writeFileSync(fileNewPath, JSON.stringify(fileObject, null, 2) + "\n");
});

fs.renameSync(npmVulnPath, npmVulnPath + '_old');
fs.renameSync(npmVulnNewPath, npmVulnPath);

