import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['@/components/page/login.vue'], resolve)
    },
    {
      path: '/index',
      name: 'index',
      component: resolve => require(['@/components/page/index.vue'], resolve),
      children: [
        {
          path: '/',
          redirect: '/home'
        },
        {
          path: '/home',
          name: 'home',
          component: resolve => require(['@/components/home/home.vue'], resolve)
        },
      ]
    }
  ]
})
