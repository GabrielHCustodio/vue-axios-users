import { createStore } from 'vuex'

export default createStore({
  state: {
    users: []
  },
  getters: {
  },
  mutations: {
    setUsers: (state, user) => {
      state.users = user
    },
    saveUser: (state, newUser) => {
      state.users.push(newUser)
    }
  },
  actions: {
  },
  modules: {
  }
})
