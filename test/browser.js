'use strict'

const test = require('tape')
const inBrowser = require('is-in-browser').default

const parse = require('../dist')

test('works in the browser', (t) => {
	t.plan(2)
	t.equal(inBrowser, true, 'not running in the browser')

	const res = parse('foo', 'foo({bar: "baz"})')
	t.deepEqual(res, {bar: 'baz'})
})
