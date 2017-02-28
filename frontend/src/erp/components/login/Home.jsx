import React from "react"
import { Link } from 'react-router'

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </div>
    )
  }
}
