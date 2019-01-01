'use strict'

const inquirer = jest.genMockFromModule('inquirer')
const wgReport = require("./mockData").wgReport

async function prompt (p) {
    // console.log(p)
    if (p.name == 'username' || p.name == 'password'){
        return {
            hackeronePass: 'mockPass', 
            hackeroneUser: 'mockUser'
        }
    } else if (p.name == 'id' || p.name == 'vulnerable_versions' || p.name == 'patched_versions'){
        return {
            id : wgReport.id,
            vulnerable_versions : wgReport.vulnerable_versions,
            patched_versions : wgReport.patched_versions
        }
    }
}

inquirer.prompt = prompt
module.exports = inquirer
