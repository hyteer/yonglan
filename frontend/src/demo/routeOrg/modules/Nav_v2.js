import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return(
        <ul role="nav">
          <li><Link to="/">Main</Link></li>
          <li><Link to="/about" activeClassName="active">About</Link></li>
		  <li><Link to="/repos" activeClassName="active">Repos</Link></li>
        </ul>
    	) 
  }
})
