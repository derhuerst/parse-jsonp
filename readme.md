# parse-jsonp

[![Greenkeeper badge](https://badges.greenkeeper.io/derhuerst/parse-jsonp.svg)](https://greenkeeper.io/)

**Get the payload of a [JSONP](https://en.wikipedia.org/wiki/JSONP) response** in Node.js and in the browser. No `fetch`/AJAX logic in here.

[![npm version](https://img.shields.io/npm/v/parse-jsonp.svg)](https://www.npmjs.com/package/parse-jsonp)
[![build status](https://img.shields.io/travis/derhuerst/parse-jsonp.svg)](https://travis-ci.org/derhuerst/parse-jsonp)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/parse-jsonp.svg)
[![chat on gitter](https://badges.gitter.im/derhuerst.svg)](https://gitter.im/derhuerst)


## Installing

```shell
npm install parse-jsonp
```


## Usage

```js
const {fetch} = require('fetch-ponyfill')()
const parse = require('parse-jsonp')

fetch('some-JSONP-url.js')
.then((res) => res.json())
.then((jsonp) => parse('callback', jsonp))
.then(console.log, console.error)
```

## API

```js
parse(hook, jsonp)
```


## Contributing

If you have a question or have difficulties using `parse-jsonp`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/parse-jsonp/issues).
