import JSURL from 'jsurl'

export default (key, replacer, reviver) => ({
  load () {
    const { hash } = window.location
    try {
      const encodedState = hash.substr(1)
      const parsedState = JSURL.parse(encodedState)
      const state = typeof parsedState === 'object'
        ? parsedState
        : {}
      return Promise.resolve(state)
    } catch (e) {
      console.error(e)
      return Promise.reject({})
    }
  },

  save (state) {
    const title = document.title
    const path = window.location.pathname
    if (Object.keys(state).length === 0 && state.constructor === Object) {
      window.history.pushState({}, title, path)
      return Promise.resolve()
    }
    const encodedState = JSURL.stringify(state)
    const url = `${path}#${encodedState}`
    window.history.pushState({}, title, url)
    return Promise.resolve()
  }
})
