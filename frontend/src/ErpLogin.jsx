import React from "react"
import { render } from "react-dom"

//import LoginContainer from "./erp/containers/LoginContainer"
import LoginForm from "./erp/components/login/Index"

class Login extends React.Component {
  render() {
    return (
      <LoginForm />
    )
  }
}

render(<Login />, document.getElementById('root'))
