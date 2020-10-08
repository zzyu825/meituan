import Vue from 'vue'
import VueRouter from 'vue-router'
import defaultPage from '@/layout/default.vue'
import index from '@/page/index'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'default',
      component: defaultPage,
      redirect: 'index',
      children: [
        {
          path: 's/:name',
          name: 'goods',
          component: () => import(/* webpackChunkName: "async" */ '@/page/goodsList') 
        },
        {
          path: 'index',
          name: 'index',
          component: index
        },
        {
          path: 'changecity',
          name: 'changecity',
          component: () => import(/* webpackChunkName: "async" */ '@/page/changeCity') 
        }
      ]
    },
    {
      path: '/blank',
      name: 'blank',
      component: () => import(/* webpackChunkName: "async" */ '@/layout/blankPage'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import(/* webpackChunkName: "async" */ '@/page/login'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import(/* webpackChunkName: "async" */ '@/page/register'),
        }
      ]
    }
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
