import test from 'ava'
import URL from 'url-parse'

import jsurlEngine from '../src'

class MockedWindow {
  constructor () {
    this._pushState = this._pushState.bind(this)
    this.history = {
      pushState: this._pushState
    }
    this.location = {
      pathname: '',
      hash: ''
    }
  }
  _pushState (data, title, url) {
    const parsedUrl = new URL(url)
    this.location.pathname = parsedUrl.pathname
    this.location.hash = parsedUrl.hash
  }
}
global.window = new MockedWindow()
global.document = {
  title: 'Mocked Document Title'
}

const engine = jsurlEngine()

const COMPLEX_STATE = {
  int: 1,
  float: 1.1,
  string: 'bar',
  bool: true,
  obj: {
    bool: true
  },
  array: [
    true,
    'bar'
  ]
}

const COMPLEX_STATE_HASH = '#~(int~1~float~1.1~string~\'bar~bool~true~obj~(bool~true)~array~(~true~\'bar))'

test('load empty hash and returns empty state', async (t) => {
  global.window.location.hash = ''
  const state = await engine.load()
  t.true(typeof state === 'object')
  t.is(Object.keys(state).length, 0)
})
test('load invalid hash, displays error and returns empty state', async (t) => {
  global.window.location.hash = '#!"§$%&/()='
  const state = await t.throws(engine.load())
  t.true(typeof state === 'object')
  t.is(Object.keys(state).length, 0)
})
test('load complex hash and returns complex state', async (t) => {
  global.window.location.hash = COMPLEX_STATE_HASH
  const state = await engine.load()
  t.true(typeof state === 'object')
  t.is(Object.keys(state).length, 6)
  t.is(state.int, COMPLEX_STATE.int)
  t.is(state.float, COMPLEX_STATE.float)
  t.is(state.string, COMPLEX_STATE.string)
  t.is(state.bool, COMPLEX_STATE.bool)
  t.deepEqual(state.obj, COMPLEX_STATE.obj)
  t.deepEqual(state.array, COMPLEX_STATE.array)
})
test('saving complex state and sets complex hash', async (t) => {
  global.window.location.hash = ''
  await engine.save(COMPLEX_STATE)
  t.is(global.window.location.hash, COMPLEX_STATE_HASH)
})
