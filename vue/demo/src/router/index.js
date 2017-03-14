import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Basic from '@/components/Basic'
import Advanced from '@/components/Advanced'
import IviewDemo from '@/components/iview/App'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {path: '/basic', name: 'Basic', component: Basic},
    {path: '/advanced', name: 'Advanced', component: Advanced},
    {path: '/iview', name: 'IviewDemo', component: IviewDemo}
  ]
})
