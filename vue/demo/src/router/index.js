import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Basic from '@/components/Basic'
import Advanced from '@/components/Advanced'
// import IviewDemo from '@/components/iview/App'
// import Event from '@/components/practice/Event'
import Event from '@/components/practice/Event'
import Hello2 from '@/components/practice/Hello2'
import Counter from '@/components/practice/Counter'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'Hello', component: Hello},
    {path: '/hello2', name: 'Hello2', component: Hello2},
    {path: '/basic', name: 'Basic', component: Basic},
    {path: '/advanced', name: 'Advanced', component: Advanced},
    // {path: '/iview', name: 'IviewDemo', component: IviewDemo},
    {path: '/event', name: 'Event', component: Event},
    {path: '/count', name: 'Counter', component: Counter}
  ]
})
