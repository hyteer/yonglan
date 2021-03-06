import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <h1>Demos</h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/first">First</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})
