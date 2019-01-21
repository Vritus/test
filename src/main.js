// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/store'
import vuex from 'vuex' // 引入状态管理
// import Qs from 'qs'

axios.defaults.baseURL = 'http://localhost:8082'
Vue.use(MuseUI)
Vue.use(vuex)
Vue.prototype.$axios = axios
Vue.prototype.$store = store
// Vue.prototype.$qs = Qs
Vue.config.productionTip = false

/* eslint-disable no-new */

//  注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  const token = store.state.token
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (token) {
      // 通过vuex state获取当前的token是否存在
      next()
    } else {
      console.log('该页面需要登陆')
      next({
        path: '/login'
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
