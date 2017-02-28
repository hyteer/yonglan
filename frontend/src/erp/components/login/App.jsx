import React from "react"
import { Link } from 'react-router'
import NavLink from './NavLink'

export default class App extends React.Component {
  render() {
    return (
      <div className="LoginApp">
        {this.props.children}
      </div>
    )
  }
}
