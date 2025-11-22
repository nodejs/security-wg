const fs = require('node:fs')
const path = require('node:path')

const depsVulnerabilitiesPath = path.join(__dirname, '../../vuln/deps/')

// Valid justification values from OpenVEX spec v0.2.0
// See: https://github.com/openvex/spec/blob/main/OPENVEX-SPEC.md#status-justifications
const validJustifications = [
    'component_not_present',
    'vulnerable_code_not_present',
    'vulnerable_code_not_in_execute_path',
    'vulnerable_code_cannot_be_controlled_by_adversary',
    'inline_mitigations_already_exist'
]

let vuln = {}

function createDepsIndex() {
    const files = fs.readdirSync(depsVulnerabilitiesPath)
    getVulnDirectoryContents(files)
    writeIndex(vuln)
}

function getVulnDirectoryContents(files) {
    for (const file of files) {
        const filename = file.slice(0, file.toString().indexOf('.json'))
        if (filename !== 'index') {
            const data = fs.readFileSync(depsVulnerabilitiesPath + file)
            const json = JSON.parse(data)

            if (!json.reason) {
                throw new Error(`Missing 'reason' field in ${file}`)
            }

            if (!validJustifications.includes(json.reason)) {
                throw new Error(
                    `Invalid justification '${json.reason}' in ${file}. ` +
                    `Valid values are: ${validJustifications.join(', ')}`
                )
            }

            createVulnObject(filename, json)
        }
    }
}

function createVulnObject(identifier, json) {
    vuln[identifier] = json
}

function writeIndex(data) {
    fs.writeFileSync(depsVulnerabilitiesPath + 'index.json', JSON.stringify(data, null, 2))
    console.log('Successfully wrote ' + depsVulnerabilitiesPath + 'index.json for deps vulnerabilities.')
}

createDepsIndex()
