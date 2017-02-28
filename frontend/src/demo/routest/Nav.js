import React from "react"
import { Link } from 'react-router'

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul role="nav">
          <li><Link to="/PageA">PageA</Link></li>
          <li><Link to="/PageB">PageB</Link></li>
        </ul>
      </div>
    )
  }
}
