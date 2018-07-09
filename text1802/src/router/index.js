import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router) //注册这个路由模块


//引入 home  card film


import Home from "../components/home"

import Longin from "../components/longin"
import List from "../components/list"

import Detail from "../components/detail"
import Del1 from "../components/del1"
import Del2 from "../components/del2"
import Del3 from "../components/del3"
import Del4 from "../components/del4"
import Shopcar from "../components/shopcar"

export default new Router({

  mode:"history", //默认 hash  #/home  history模式  /home 	
  routes: [
    {
    	path:"/home",
    	component:Home
    },
    {
    	path:"/list/:id",
    	component:List
    },
    {
    	path:"/longin",
    	component:Longin
    },
    {
    	path:"/shopcar", //动态路由
    	component:Shopcar
    },
    {
    	path:"/detail", 
    	component:Detail
    },
    {
    	path:"/del1", 
    	component:Del1
    },
    {
    	path:"/del2", 
    	component:Del2
    },
    {
    	path:"/del3", 
    	component:Del3
    },
    {
    	path:"/del4", 
    	component:Del4
    },
 
    {
    	path:"*",
    	redirect:"/home"
    }
  ]
})


