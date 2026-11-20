'use strict';

const { describe, it } = require('node:test');
const assert = require('node:assert');

const { supportedVersionAffected } = require('../tools/create_index/index_generator');

const supportedMajors = [22, 24, 26];

describe('Testing index_generator supportedVersionAffected', () => {
  it('keeps a vulnerability that affects a supported release line', () => {
    assert.strictEqual(
      supportedVersionAffected({ vulnerable: '22.x || 24.x || 26.x' }, supportedMajors),
      true
    );
  });

  it('keeps a vulnerability that only affects older versions of a supported line', () => {
    assert.strictEqual(
      supportedVersionAffected({ vulnerable: '<24.5.0' }, supportedMajors),
      true
    );
  });

  it('drops a vulnerability that only affects end-of-life release lines', () => {
    assert.strictEqual(
      supportedVersionAffected({ vulnerable: '8.x || 7.x || 4.x || 6.x || 5.x' }, supportedMajors),
      false
    );
  });

  it('keeps npm vulnerabilities, which have no vulnerable property', () => {
    assert.strictEqual(
      supportedVersionAffected({ vulnerable_versions: '<1.0.0' }, supportedMajors),
      true
    );
  });

  it('returns a boolean, not a Promise', () => {
    const result = supportedVersionAffected({ vulnerable: '8.x' }, supportedMajors);
    assert.strictEqual(typeof result, 'boolean');
  });
});
