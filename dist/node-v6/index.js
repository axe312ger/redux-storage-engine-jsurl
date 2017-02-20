'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsurl = require('jsurl');

var _jsurl2 = _interopRequireDefault(_jsurl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (key, replacer, reviver) => ({
  load() {
    const hash = window.location.hash;

    try {
      const encodedState = hash.substr(1);
      const parsedState = _jsurl2.default.parse(encodedState);
      const state = typeof parsedState === 'object' ? parsedState : {};
      return Promise.resolve(state);
    } catch (e) {
      console.error(e);
      return Promise.reject({});
    }
  },

  save(state) {
    const title = document.title;
    const path = window.location.pathname;
    if (Object.keys(state).length === 0 && state.constructor === Object) {
      window.history.pushState({}, title, path);
      return Promise.resolve();
    }
    const encodedState = _jsurl2.default.stringify(state);
    const url = `${path}#${encodedState}`;
    window.history.pushState({}, title, url);
    return Promise.resolve();
  }
});

module.exports = exports['default'];