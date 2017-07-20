'use strict'

if (process.browser) module.exports = require('./browser')
else module.exports = require('./node')
