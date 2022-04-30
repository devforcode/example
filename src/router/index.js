import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: () => import('@/layout/home'),
    },
    {
      name: 'hello',
      path: '/hello',
      component: () => import('@/components/HelloWorld'),
    },
    {
      name: 'wsItem',
      path: '/wsItem',
      component: () => import('@/components/wsItem'),
    },
    {
      name: 'workPost',
      path: '/workPost',
      component: () => import('@/views/workPost'),
    },
    {
      name: 'workDetail',
      path: '/workDetail',
      component: () => import('@/views/workDetail'),
    },
    {
      name: 'workList',
      path: '/workList',
      component: () => import('@/views/workList'),
    },
  ],
})
