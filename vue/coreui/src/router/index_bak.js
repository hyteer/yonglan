import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from 'containers/Full'

// Views
import Orders from 'views/Orders'
import Warehouse from 'views/Warehouse'
import Users from 'views/Users'
import Settings from 'views/Settings'

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
      component: Full,
      children: [
        {path: 'orders', name: 'Orders', component: Orders},
        {path: 'warehouse', name: 'Warehouse', component: Warehouse},
        {path: 'users', name: 'Users', component: Users},
        {path: 'settings', name: 'Settings', component: Settings}
      ]
    }
  ]
})
