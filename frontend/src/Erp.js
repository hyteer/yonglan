import React from "react"
import { render } from "react-dom"

import ErpContainer from "./erp/containers/ErpContainer"

class Erp extends React.Component {
  render() {
    return (
      <ErpContainer />
    )
  }
}

render(<Erp />, document.getElementById('root'))
