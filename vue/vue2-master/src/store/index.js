import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'

import status from './modules/status'
import demo from './modules/demo'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  modules: {
    status,
    demo
  },
  strict: debug
  // plugins: debug ? [createLogger()] : []
  // plugins: middlewares
})
