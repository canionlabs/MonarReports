import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    strict: false,
    state: () => ({
      user: null,
      token: null
    }),
    mutations: {
      setUser(state, user, token) {
        state.user = user || null
        state.user = token || null
      }
    },
    getters: {
      isAuthenticated (state) {
        return !!state.token
      },
      loggedUser (state) {
        return state.user
      }
    },
    actions: {
      login ({commit}, username, token) {
        commit('setUser', username, token)
      }
    }
  })
}

export default createStore
