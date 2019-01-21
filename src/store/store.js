// store store.js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {
  username: window.sessionStorage.getItem('username'),
  token: window.sessionStorage.getItem('token'),
  httpError: {
    hasError: false,
    status: '',
    statusText: ''
  }
}
const mutations = {
  // 将token保存到sessionStorage里，token表示登陆状态
  // 登陆
  ADD_ACCOUNT: (state, token) => {
    state.token = token
    window.sessionStorage.setItem('token', token)
  },
  // 获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.username = data
    window.sessionStorage.setItem('username', data)
  },
  // 登出
  LOGOUT: state => {
    // 登出的时候要清除token
    state.token = null
    state.username = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('username')
  },
  ON_HTTP_ERROR (state, payload) {
    state.httpError = payload
  }
}

const actions = {}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
