import React from "react"

import Headline from "../components/Headline"
import Home from "../components/Home"

export default class App1Container extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Headline>YongLan Test</Headline>
          </div>
        </div>
        <Home />
      </div>
    )
  }
}
