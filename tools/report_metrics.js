#!/usr/bin/env node
/**
 * Compute reporter metrics from a vulnerability index.
 *
 * The index is expected to be a JSON array of vulnerability objects.
 * Each vulnerability may contain a `reporter`, `reporter_name`,
 * `reporterId`, or `reporter_id` field. The script aggregates the
 * number of reports per reporter and outputs a JSON object mapping
 * reporter identifiers to counts.
 *
 * Usage:
 *   node tools/report_metrics.js [index-file]
 *
 * If no index-file is provided, it defaults to `tools/vuln_index.json`.
 */

const fs = require('fs').promises;
const path = require('path');

/**
 * Compute reporter metrics from an array of vulnerability objects.
 *
 * @param {Array<Object>} indexData - Array of vulnerability objects.
 * @returns {Object<string, number>} Mapping of reporter to count.
 */
async function computeReporterMetrics(indexData) {
  const metrics = new Map();

  for (const vuln of indexData) {
    const reporter =
      vuln.reporter ||
      vuln.reporter_name ||
      vuln.reporterId ||
      vuln.reporter_id;

    if (!reporter) continue;

    metrics.set(reporter, (metrics.get(reporter) || 0) + 1);
  }

  return Object.fromEntries(metrics);
}

/**
 * Main entry point for the CLI.
 */
async function main() {
  const indexPath =
    process.argv[2] ?? path.resolve('tools', 'vuln_index.json');

  const data = await fs.readFile(indexPath, 'utf8');
  const index = JSON.parse(data);

  const metrics = await computeReporterMetrics(index);
  console.log(JSON.stringify(metrics, null, 2));
}

if (require.main === module) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = { computeReporterMetrics };
