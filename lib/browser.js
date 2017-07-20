'use strict'

const window = require('global/window')
const document = require('global/document')

const parseJSONPBrowser = (hook, jsonp) => {
	let val
	const collect = (_val) => {
		val = _val
	}

	window[hook] = collect
	const script = document.createElement('script')
	script.innerText = jsonp

	document.body.appendChild(script)
	// jsonp will be evaluated
	document.body.removeChild(script)

	return val
}

module.exports = parseJSONPBrowser
