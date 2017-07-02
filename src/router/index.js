import Vue from 'vue'
import Router from 'vue-router'
import Advertisement from '@/components/Advertisement'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Advertisement',
      component: Advertisement
    }
  ]
})
