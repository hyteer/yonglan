import React from 'react'
import { Link } from 'react-router'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return(
        <ul role="nav">
          <li><Link to="/">Main</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
		  <li><NavLink to="/repos">Repos</NavLink></li>
        </ul>
    	) 
  }
})