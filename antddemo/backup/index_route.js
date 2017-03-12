import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import App from './components/App'
import Links from './components/Links'
import Home from './components/Home'
import About from './components/About'
import First from './components/First'
import LoginForm from './components/LoginForm'


render((
  <Router history={hashHistory}>
    <Route path="/" component={App}/>
    {/* add the routes here */}
    <Route path="/home" component={Home}/>
    <Route path="/about" component={About}/>
  </Router>
), document.getElementById('root'))
