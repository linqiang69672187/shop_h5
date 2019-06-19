import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/wait_to_shouquan',
      name: 'wait_to_shouquan',
      component: require('@/views/wait_to_shouquan.vue')
    },
  ]
})
