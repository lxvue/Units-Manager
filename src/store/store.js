import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 0,
	show:false,
	addShow:true,
	editShow:false,
  },
  mutations: {
    increase (state) {
      state.count++
    }
  },
  actions: {
    actionIncrease ({commit}) {
      commit('increase')
    }
  }
})
export default store

