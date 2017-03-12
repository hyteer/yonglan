import React from 'react'
import { Link } from 'react-router'
import Nav from './Nav'

export default React.createClass({
  render() {
    return(
    	<div>
        <h3>React Router Tutorial</h3>
        <Nav />
        {this.props.children}
      </div>
    	) 
  }
})
