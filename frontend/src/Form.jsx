import React from "react"
import { render } from "react-dom"

import FormDemo from './demo/form_demo/start/index'

class App extends React.Component {
  render() {
    return (
      <FormDemo />
    )
  }
}

render(<App/>, document.getElementById('root'))
