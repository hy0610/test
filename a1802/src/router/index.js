import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../components/detail'
import List from '../components/list'
Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
      path: '/detail',
      component: Detail
    },
    {
      path: '/list',
      component: List
  }]
})
