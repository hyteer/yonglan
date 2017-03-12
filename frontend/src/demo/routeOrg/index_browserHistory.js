import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory } from 'react-router'
import App from './modules/App'
import About from './modules/About'
import Repos from './modules/Repos'

render((
	<Router history={browserHistory}>
    	<Route path="/" component={App}>
	    	<Route path="/about" component={About}/>
	    	<Route path="/repos" component={Repos}/>
    	</Route>
  	</Router>
	),document.getElementById('app'))
	