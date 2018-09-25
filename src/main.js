// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引用vuex
import Vuex from 'vuex'
import store from './store/store.js'
//引用elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI,Vuex);

//Vue use()

Vue.config.productionTip = false
//引用axios
import axios from 'axios'
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
// 引用echarts
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
