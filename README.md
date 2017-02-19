# redux-storage-engine-jsurl

> Store your state as url hash via [redux-storage](https://github.com/react-stack/redux-storage) and [jsurl](https://github.com/Sage/jsurl)

[![Build Status](https://img.shields.io/circleci/project/axe312ger/redux-storage-engine-jsurl/master.svg?maxAge=2592000)](https://circleci.com/gh/axe312ger/redux-storage-engine-jsurl)
[![codecov](https://codecov.io/gh/axe312ger/redux-storage-engine-jsurl/branch/master/graph/badge.svg)](https://codecov.io/gh/axe312ger/redux-storage-engine-jsurl)
![David](https://img.shields.io/david/axe312ger/redux-storage-engine-jsurl.svg)
![David](https://img.shields.io/david/dev/axe312ger/redux-storage-engine-jsurl.svg)

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://axe312.mit-license.org)
[![NPM Version](https://img.shields.io/npm/v/redux-storage-engine-jsurl.svg)](https://www.npmjs.com/package/redux-storage-engine-jsurl)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![semantic-release](https://img.shields.io/badge/%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![Greenkeeper badge](https://badges.greenkeeper.io/axe312ger/redux-storage-engine-jsurl.svg)](https://greenkeeper.io/)

With this engine, you allow your users to share their application state via the URL.

It stores your passed state in the `window.location.hash` property using `window.pushState()`. With [jsurl](https://github.com/Sage/jsurl) the stored state after the fragment identifier is kind of human readable.

The main purpose of this project is to give developers of small and simple redux based apps the option that users can share their app state with others without having to implement a router.

## Install

```js
npm install --save redux-storage-engine-jsurl
```

## Usage

Just use it as any other redux-storage engine. If your environment does not support the import syntax, see further below.

```js
import createEngine from 'redux-storage-engine-jsurl'

// In case your loader does not support the package.json module entry:
import createEngine from 'redux-storage-engine-jsurl/dist/es-modules'

const engine = createEngine()
```

This is a ES5 variant using ES2015 modules instead of CommonJS. Best option when u want to use
tree shaking & and use UglifyJS2 until it is ready for [ES6](https://github.com/webpack/webpack/issues/2545).

### Node 6
```js
const createEngine = require('redux-storage-engine-jsurl')
const engine = createEngine()
```

### Node 4
A version for the LTS version of node is also supplied. You can require it like this:

```js
const createEngine = require('redux-storage-engine-jsurl/dist/node4')
const engine = createEngine()
```

## Options

There are no options to set. I recommend to combine the engine with [redux-storage-decorator-filter](https://github.com/react-stack/redux-storage-decorator-filter) and [redux-storage-decorator-debounce](https://github.com/react-stack/redux-storage-decorator-debounce)
to store only parts of your state in the url and avoid spamming `window.pushState()`.

## Development

This project follows the [standard](https://github.com/feross/standard) coding and the [conventional changelog](https://github.com/conventional-changelog/conventional-changelog-angular/blob/master/convention.md) commit message style. Also it is configured to never decrease the code coverage of its tests.

Also make sure you check out all available npm scripts via `npm run`.

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/axe312ger/redux-storage-engine-jsurl/issues/new).
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.
