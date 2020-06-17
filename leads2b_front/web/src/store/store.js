import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    user: {
        name: '',
        email: '',
        token: sessionStorage.getItem('user-token') || ''  
    }
  },
  getters: {
    getUser: state => {
      return state.user;
    }
  },  
  mutations: {
    setUser (state, user) {
      state.user = user
    }
  }
})

export default store;