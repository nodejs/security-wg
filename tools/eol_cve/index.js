const vulnerabilities = require('../../vuln/core/index.json');
const { createWriteStream } = require('fs');
const { format } = require('fast-csv');
const { resolve } = require('path');
const semver = require('semver');
const nv = require('@pkgjs/nv');
const path = require('path');

const csvStream = format({ headers: true });
const filePath = resolve(__dirname, 'eol-cve.csv');
const writeStream = createWriteStream(filePath);
csvStream.pipe(writeStream);

const MINIMUM_VERSION = 4;

const RELEASE_SCHEDULE_JSON = 'https://raw.githubusercontent.com/nodejs/Release/main/schedule.json';

async function fetchReleasesSchedule() {
    try {
        const response = await fetch(RELEASE_SCHEDULE_JSON);
        const body = await response.json();
        return body;
    } catch (error) {
        throw new Error(`Failed to fetch release schedule: ${error}`);
    }
}

// Given a string 0.10.x || 0.12.x || 4.x
// returns the latest major version
function getLastAffectedVersion(vulnerable) {
    const versions = vulnerable.split('||').map((v) => {
        // Not all versions are semver, so we need to coerce them
        // Example 4.x, 5.6.x etc
        const coerced = semver.coerce(v.replace('x', '0').trim());
        return semver.major(coerced);
    });
    return Math.max(...versions)
}

// Given a number n, returns an array of numbers from MINIMUM_VERSION to n
// Example differenceToArray(7) => [4, 5, 6]
function differenceToArray(n) {
    return n > MINIMUM_VERSION ? Array.from({ length: n - MINIMUM_VERSION }, (_, i) => i + MINIMUM_VERSION) : [];
}

// Get the first patched version
// If an array we return the first element
// We only care to get when the vulnerability was patched
// usually if multiple version they are patched at the same time
function getPatchedVersion(patched) {
    const patches = patched.split('||');
    return semver.coerce(patches[0].trim()).version;
}


function findPatchReleaseDate(patch, versions) {
    const releaseDate = versions.find((v) => v.version === patch)?.releaseDate;
    return new Date(releaseDate);
}

async function run() {
    const releases = await fetchReleasesSchedule();
    const versions = await nv('all');

    for (const vuln of Object.values(vulnerabilities)) {
        // No CVEs for this vulnerability
        if (!vuln.cve?.length) {
            continue;
        }

        // Each vulnerability can have multiple CVEs
        for (const cve of vuln.cve) {
            const last = getLastAffectedVersion(vuln.vulnerable);
            // Skip 0.x and 4.x versions
            if (last <= MINIMUM_VERSION) continue;

            // Get in which version the vulnerability was patched
            const patch = getPatchedVersion(vuln.patched);
            // Get the release date for the patch
            const releaseDate = findPatchReleaseDate(patch, versions);
            if (!releaseDate) throw new Error(`Release date for ${patch} not found`);
            const releaseMajors = differenceToArray(last).filter((major) => {
                // Find the release schedule for the major version
                // Example v4, v5, v6 etc
                const release = releases[`v${major}`];

                if (!release) throw new Error(`Release schedule for v${major} not found`);

                if (!release.end) throw new Error(`End of life for v${major} not found`);

                // Get the end of life date for the major version
                const eol = new Date(release.end);
                // If the release date is greater than the end of life date
                // then the version is affected
                // Example the fix was released in v7.x 01/01/2022 and v6.x EOL is 01/01/2021
                // we assume v6.x is affected
                return releaseDate > eol;
            });

            if(releaseMajors.length === 0) continue;

            // Write into the format v4.x || v5.x || v6.x
            const missing = releaseMajors.map((n) => `${n}.x`).join(' || ');
            csvStream.write({
                cve,
                vulnerable: vuln.vulnerable,
                patched: vuln.patched,
                affectedEOL: missing
            });
        }
    }
    writeStream.write('\n');
    csvStream.end();
}

run();
