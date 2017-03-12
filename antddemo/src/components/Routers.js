import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  hashHistory,
  Link
} from 'react-router-dom'
import { Row, Col } from 'antd';
import Home from './Home'
import About from './About'
import Topics from './Topics'
import DemoApp from '../demo/App'
import LayoutDemo from './antd/FirstLayout'


const BasicExample = () => (
  <Router>
    <div>
      <Row>
      <div>
      <ul className="nav navbar-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/layout">Layout</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/demo">Demo</Link></li>
      </ul>
      </div>
      </Row>
      <br/>
      <hr/>
      <br/>
      <div>
      <Route exact path="/" component={Home}/>
      <Route path="/layout" component={LayoutDemo}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
      <Route path="/demo" component={DemoApp}/>
      </div>
    </div>
  </Router>
)

export default BasicExample
