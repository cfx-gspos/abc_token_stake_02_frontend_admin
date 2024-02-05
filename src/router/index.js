import Vue from 'vue'
import Router from 'vue-router'
import abcpool from '@/components/Abcpool'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/abcpool',
      name: 'abcpool',
      component: abcpool
    },
    {
      path: '/',
      name: 'abcpool',
      component: abcpool
    }
  ]
})
