import React from "react"
import { render } from "react-dom"

//import LoginContainer from "./erp/containers/LoginContainer"
import BasicRouter from "./BasicRouter"

class Routest extends React.Component {
  render() {
    return (
      <BasicRouter />
    )
  }
}

render(<Routest />, document.getElementById('root'))
