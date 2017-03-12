import React from 'react'

class First extends React.Component {

  render() {
    return(
      <div>
      <h3>First</h3>
      <p>Hello, {this.props.name}</p>
    </div>
    )
  }
}


export default First
