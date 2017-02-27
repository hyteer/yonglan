import React from "react"

export default class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-box-body">
        <h3>A login form with react</h3>
        <form action="#" method="post">
                <div className="form-group has-feedback">
                  <input autofocus name="username" type="text" className="form-control" placeholder="Email"/>
                  <span className="glyphicon glyphicon-user form-control-feedback"></span>
                </div>
                <div className="form-group has-feedback">
                    <input name="password" type="password" className="form-control"
                        placeholder="Password"/>
                    <span className="glyphicon glyphicon-lock form-control-feedback"></span>
                </div>
                <div className="row">
                    <div className="col-xs-8"></div>
                    <div className="col-xs-4">
                        <button type="submit" className="btn btn-primary btn-block btn-flat">Sign In</button>
                    </div>
                </div>
            </form>
            <a href="#">I forgot my password</a><br/>
            <a href="register.html" class="text-center">Register a new membership</a>
      </div>
    )
  }
}
