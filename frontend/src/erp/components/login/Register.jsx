import React from "react"
import NavLink from './NavLink'

export default class RegisterContainer extends React.Component {
  render() {
    return (
      <div className="register-box">
  <div className="register-logo">
    <a href="/erp">永兰科技 - WMS系统</a>
  </div>

  <div className="register-box-body">
    <p className="login-box-msg">注 册</p>

    <form id="register" action="/erp/register/" method="post">
      <input type='hidden' name='csrfmiddlewaretoken' value='7Xvn7UYUbe8I5Ym5Oscj367KLwZ4UHfx6Tyd0Ea7My6ZmTuxd11pFpo9eCk6nFrw' />
      <div className="form-group has-feedback">
        <input className="form-control" id="id_username" maxlength="20" name="username" placeholder="用户名" type="text" required />
        <span className="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input className="form-control" id="id_password" maxlength="10" minlength="6" name="password" placeholder="密码" type="password" required />
        <span className="glyphicon glyphicon-lock form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input className="form-control" id="id_confirm_password" maxlength="10" minlength="6" name="confirm_password" placeholder="确认密码" type="password" required />
        <span className="glyphicon glyphicon-log-in form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input className="form-control" id="id_name" maxlength="30" name="name" placeholder="姓名/公司" type="text" required />
        <span className="glyphicon glyphicon-user form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input className="form-control" id="id_phone" maxlength="20" name="phone" placeholder="电话" type="text" required />
        <span className="glyphicon glyphicon-phone form-control-feedback"></span>
      </div>
      <div className="form-group has-feedback">
        <input className="form-control" id="id_email" maxlength="254" name="email" placeholder="Email" type="email" />
        <span className="glyphicon glyphicon-envelope form-control-feedback"></span>
      </div>

      <div className="row">
        <div className="col-xs-8">
          <div className="checkbox icheck">
            <label>
              <input type="checkbox" /> 同意 <a href="#">条款</a>
            </label>
          </div>
        </div>

        <div className="col-xs-4">
          <button type="submit" className="btn btn-primary btn-block btn-flat">注册</button>
        </div>

      </div>
    </form>
    <br/>
    <a href="/erp/login" className="text-center">已有账号,现在登录</a>
    <NavLink to="/login">ReactRouter</NavLink>
  </div>

</div>
    )
  }
}
