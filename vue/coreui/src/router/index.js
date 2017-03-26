import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Main from 'containers/Main'

// Views
import Dashboard from 'views/Dashboard'
import Orders from 'views/Orders'
import Warehouse from 'views/Warehouse'
import Users from 'views/Users'
import Settings from 'views/Settings'
import Test from 'views/Test'
import Login from 'views/Login'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/orders',
      name: '订单管理',
      component: Main,
      children: [
        {path: 'dashboard', name: 'Dashboard', component: Dashboard},
        {path: '/orders', name: 'Orders', component: Orders, meta: { label: '订单管理' }},
        {path: 'warehouse', name: 'Warehouse', component: Warehouse, meta: { label: '仓库管理' }},
        {path: 'users', name: 'Users', component: Users, meta: { label: '用户管理' }},
        {path: 'settings', name: 'Settings', component: Settings, meta: { label: '系统设置' }}
      ]
    },
    {path: '/login', name: 'Login', component: Login},
    {path: '/test', name: 'Test', component: Test}
  ]
})
