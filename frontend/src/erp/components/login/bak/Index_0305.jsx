import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory, IndexRoute } from 'react-router'
import Login from './Login'
import Register from './Register'
import App from './App'
import About from './About'
import Repos from './Repos'

export default class LoginContainer extends React.Component {
  render() {
    return (
      <Router history={hashHistory}>
    	<Route path="/" component={App}>
        <IndexRoute component={Login}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
    	</Route>
  	</Router>
    )
  }
}
