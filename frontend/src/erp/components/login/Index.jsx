import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import Login from './Login'
import Register from './Register'
import Home from './Home'

export default class LoginContainer extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
      </Router>
    )
  }
}
