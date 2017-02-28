import React from "react"
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class App extends React.Component {
  render() {
    return (
      <div className="LoginApp">
        <ul role="nav">
          <li><Link to="/">Main</Link></li>
          <li><NavLink to="/login">login</NavLink></li>
          <li><NavLink to="/register">register</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
		      <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
