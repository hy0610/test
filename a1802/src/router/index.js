import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/home'
import Film from '../components/film'
import Card from '../components/card'
import Nowplaying from '../components/nowplaying'
import Comingsoon from '../components/comingsoon'
import Detail from '../components/detail'


Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/film',
      component: Film,
      children:[{
	      	path:"nowplaying",
	      	component:Nowplaying
      },{
	      	path:"comingsoon",
	      	component:Comingsoon
      },{
      		path:"/film",
	      	redirect:"/film/nowplaying"
      }]
    },
    {
      path: '/card',
      component: Card
    },
    {
      path: '/detail/:id',
      component: Detail
    },
    {
      path: '*',
      redirect:"/home"
    }
  ]
})
