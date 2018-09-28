import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 引用外部状态1
import MoudleShow from "./MoudleShow.js"
const store = new Vuex.Store({
  state:MoudleShow,
  modules: {
        dialog: MoudleShow // 引用外部状态模板2,
		//做出这样的修改之后 , 我们将之前我们使用的 $store.state.show 统统改为 $store.state.dialog.show 即可。
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

