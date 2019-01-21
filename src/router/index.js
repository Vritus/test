import Vue from 'vue'
import Router from 'vue-router'
import User from '@/views/User'
import Login from '@/views/Login'
import PublicHeader from '@/components/PublicHeader'
import Order from '@/components/Order'
import Thingslist from '@/views/Thingslist'
import Album from '@/views/Album'
import About from '@/views/About'
import Index from '@/views/Index'
import Test from '@/views/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/publicheader',
      name: 'PublicHeader',
      component: PublicHeader
    },
    {
      path: '/user',
      name: 'User',
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      },
      component: User
    },
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/thingslist',
      name: 'Thingslist',
      component: Thingslist
    },
    {
      path: '/album',
      name: 'Alubm',
      component: Album
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
