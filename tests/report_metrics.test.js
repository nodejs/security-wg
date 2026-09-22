const { test } = require('node:test');
const assert = require('assert');
const { computeReporterMetrics } = require('../tools/report_metrics');

test('computeReporterMetrics aggregates reporter counts', async () => {
  const sampleIndex = [
    { id: 1, reporter: 'alice' },
    { id: 2, reporter: 'bob' },
    { id: 3, reporter: 'alice' },
    { id: 4, reporter: 'charlie' },
    { id: 5, reporter: 'bob' },
  ];

  const metrics = await computeReporterMetrics(sampleIndex);
  assert.deepStrictEqual(metrics, { alice: 2, bob: 2, charlie: 1 });
});
