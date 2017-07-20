'use strict'

if (process.browser) module.exports = require('./lib/browser')
else module.exports = require('./lib/node')
