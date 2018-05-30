import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Goals from './views/Goals.vue'
import Progress from './views/Progress.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/goals',
      name: 'goals',
      component: Goals
    },
    {
      path: '/progress',
      name: 'progress',
      component: Progress
    }
  ]
})
