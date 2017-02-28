import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import App from './App'
import PageA from './PageA'
import PageB from './PageB'

export default class Routest extends React.Component {
  render() {
    return (
      <Router>
        <Route path="/" component={App}>
          <IndexRoute component={PageA}/>
          <Route path="/PageA" component={PageA}/>
          <Route path="/PageB" component={PageB}/>
          <p>test..</p>
        </Route>
      </Router>
    )
  }
}
