import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
// import Rtcount from '@/components/common/Rtcount'
import One from '@/components/One'
import Two from '@/components/Two'
import Three from '@/components/Three'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/one',
          name: 'one',
          component: One
        },
        {
          path: '/two',
          name: 'Two',
          component: Two
        },
        {
          path: '/three',
          name: 'Three',
          component: Three
        }
      ]
    }
  ]
})
