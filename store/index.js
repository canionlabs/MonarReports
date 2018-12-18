import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

const createStore = () => {
  return new Vuex.Store({
    strict: false,
    state: {
      user: null,
      token: null
    },
    plugins: [createPersistedState()],
    mutations: {
      setUser(state, [user, token]) {
        state.user = user || null
        state.token = token || null
        console.log(state.user)
        console.log(state.token)
      },
      destroyUser(state) {
        state.user = null
        state.token = null
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
      login ({commit}, {username, token}) {
        commit('setUser', [username, token])
      },
      logout ({commit}) {
        commit('destroyUser')
      }
    }
  })
}

export default createStore
