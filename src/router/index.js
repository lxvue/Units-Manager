import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
//登录
import Login from '@/components/Login/index'
//详情主页面
import Main from '@/components/Main/index'
//后台主页面
import Home from '@/components/Home/index'

//单位信息页面
import Company from '@/components/Company/index'
//学校信息页面
import School from '@/components/School/index'
//个人信息页面
import Person from '@/components/Person/index'
//用户信息页面
import User from '@/components/User/index'
//学习经历页面
import StudyExprience from '@/components/StudyExprience/index'
//工作经历页面
import WorkExprience from '@/components/WorkExprience/index'
//兴趣爱好页面
import Hobby from '@/components/Hobby/index'
//客户关系页面
import Relation from '@/components/Relation/index'



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
      component: Home,
			 children:[
                    { path: '/home/Company', component: Company},       
										{ path: '/home/School', component: School},					
										{ path: '/home/User', component: User},
                    { path: '/home/Person', component: Person},     
										{ path: '/home/StudyExprience', component: StudyExprience},        
										{ path: '/home/WorkExprience', component: WorkExprience},           
										{ path: '/home/Hobby', component: Hobby},			
										{ path: '/home/Relation', component: Relation}
                ]
    },
    {
      path: '/Main',
      name: 'Main',
      component: Main
    }
  ]
})
