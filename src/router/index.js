import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//登录
import Login from '@/components/Login/index'
//详情主页面
import Main from '@/components/Main/index'
//后台主页面
import Home from '@/components/Home/index'





Vue.use(Router)

export default new Router({
  routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		},
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
})
