import React from "react"
import { render } from "react-dom"

//import LoginContainer from "./erp/containers/LoginContainer"
import Routers from "./Routers"

class Routest extends React.Component {
  render() {
    return (
      <Routers />
    )
  }
}

render(<Routest />, document.getElementById('root'))
