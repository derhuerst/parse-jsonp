'use strict'

const test = require('tape')

const parse = require('../dist')

test('works in Node', (t) => {
	t.plan(1)

	const res = parse('foo', 'foo({bar: "baz"})')
	t.deepEqual(res, {bar: 'baz'})
})
