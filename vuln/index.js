'use strict';

const path = require('node:path');

module.exports = {
  paths: {
    npm: path.join(__dirname, 'npm'),
    core: path.join(__dirname, 'core')
  }
};
