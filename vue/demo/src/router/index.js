import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Basic from '@/components/Basic'
import Advanced from '@/components/Advanced'
// import IviewDemo from '@/components/iview/App'
// import Event from '@/components/practice/Event'
import Event from '@/components/practice/Event'
import Hello from '@/components/practice/Hello'
import Counter from '@/components/practice/Counter'
import Iview from '@/demo/iview/App'
import BasicDemo from '@/demo/iview/Basic'
import Testing from '@/components/practice/Testing'
import Message from '@/demo/iview/Message'
import Button from '@/demo/iview/Button'
import Layout from '@/demo/iview/Layout'
import CustomLayout from '@/demo/iview/CustomLayout'
import AxiosDemo from '@/demo/Axios'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/home', name: 'Home', component: Home},
    {path: '/hello', name: 'Hello', component: Hello},
    {path: '/basic', name: 'Basic', component: Basic},
    {path: '/testing', name: 'Testing', component: Testing},
    {path: '/axios', name: 'AxiosDemo', component: AxiosDemo},
    {path: '/advanced', name: 'Advanced', component: Advanced},
    // {path: '/iview', name: 'IviewDemo', component: IviewDemo},
    {path: '/event', name: 'Event', component: Event},
    {path: '/count', name: 'Counter', component: Counter},
    {path: '/iview', name: 'Iview', component: Iview,
      children: [
        { path: 'basic', component: BasicDemo },
        { path: 'button', component: Button },
        { path: 'message', component: Message },
        { path: 'layout', component: Layout },
        { path: 'custlayout', component: CustomLayout },
      ]
    }
  ]
})
