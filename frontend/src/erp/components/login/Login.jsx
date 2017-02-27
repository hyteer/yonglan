import React from "react"
import NavLink from './NavLink'

export default class LoginContainer extends React.Component {
  render() {
    return (
      <div className="login-box-body">
        <p className="login-box-msg"></p>
        <form action="/erp/login/" method="post">
          <div className="form-group has-feedback">
            <input type="text" name="username" className="form-control" placeholder="用户名"/>
            <span className="glyphicon glyphicon-user form-control-feedback"></span>
          </div>
          <div className="form-group has-feedback">
            <input type="password" name="password" className="form-control" placeholder="密码"/>
            <span className="glyphicon glyphicon-lock form-control-feedback"></span>
          </div>
          <div className="row">
            <div className="col-xs-8">
              <div className="checkbox icheck">
                <label>
                  <input type="checkbox"/> 记住我
                </label>
              </div>
            </div>
            {/* <!-- /.col --> */}
            <div className="col-xs-4">
              <button type="submit" className="btn btn-primary btn-block btn-flat">登录</button>
            </div>
            {/* <!-- /.col --> */}
          </div>
        </form><br/>
        <p>
          <a href="#">忘记密码?</a><br/>
          <a href="/erp/register" className="text-center">注册>></a>
          <NavLink to="/register">ReactRouter</NavLink>
        </p>
      </div>
    )
  }
}
