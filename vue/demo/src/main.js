// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import { debugLog,ytdebug,http,getResp } from './utils'
//var conf = require('../config/conf')
import conf from '../config/conf'

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


//var info = debugLog("test log...")  // Test my utils
//console.log("Info:", info)
// ------------- Init Custom prototypes -------------
//var http = axios.create(this.conf.axiosConfig)
Vue.prototype.conf = conf
Vue.prototype.debugLog = debugLog
Vue.prototype.http = http


console.log("Conf:",conf)
//console.log(conf)


//ytdebug()
//var res = http('/api/')
//console.log("Res:"+res)
//var res2 = getResp()
//console.log("Res2:"+res2)
// ------------------- Init Store --------------------
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
    decrement: ({ commit }) => commit('decrement'),
    incrementAsync ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          commit('increment',1)
          resolve()
        }, 1000)
      })
    },
    async asyncLog ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Log: Async testing...")
          resolve()
        }, 5000)
      })
    },
    async demoAwait ({ dispatch,getUsers }) {
      //await dispatch('asyncLog')
      getUsers()
      console.log("asyncLog finished...")
    }
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

//store.commit('increment',3)

console.log(store.state.count) // -> 1
