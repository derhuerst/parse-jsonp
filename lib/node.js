'use strict'

const {runInNewContext} = require('vm')

const parseJSONPNode = (hook, jsonp) => {
	let val
	const collect = (_val) => {
		val = _val
	}

	const ctx = Object.create(null)
	ctx[hook] = collect
	runInNewContext(jsonp, ctx)

	return val
}

module.exports = parseJSONPNode
