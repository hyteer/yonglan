// import 'babel-polyfill'
import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(Counter)
})
