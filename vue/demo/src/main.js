// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App'
import DemoApp from './DemoApp'
import router from './router'
import 'iview/dist/styles/iview.css'

import iView from 'iview'
//import 'iview/dist/styles/iview.css'   // 使用 CSS

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(iView)

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state,n) {
      console.log("N:"+n)
      state.count += n
    },
    decrement (state) {
      state.count -= 1
    }
  },
  actions: {
    increment: ({ commit }) => commit('increment',n),
    decrement: ({ commit }) => commit('decrement')
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(DemoApp)
  //template: '<DemoApp/>',
  //components: { DemoApp }
})



store.commit('increment',3)

console.log(store.state.count) // -> 1
