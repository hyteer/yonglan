import React from "react"
import ReactDOM from "react-dom"


const changeTitle = (title) => {
  document.title = title
}

export default class LoginContainer extends React.Component {
  constructor(props) {
    super(props);
    //this.handleLoginClick = this.handleLoginClick.bind(this);
    //this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleLoginTitle = this.handleLoginTitle.bind(this);
    this.handleRegisterTitle = this.handleRegisterTitle.bind(this);
    this.state = {
      isLoggedIn: false,
      liked: false,
      title: '永兰WMS系统 | 登录'
    };
  }

  handleLoginClick() {
    console.log("switch to register...")
    changeTitle('永兰WMS系统 | 注册')
  }

  switchToRegister() {
    console.log("switch to register...")
    changeTitle('永兰WMS系统 | 注册')
  }
  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  handleLoginTitle() {
    this.setState({title: '永兰WMS系统 | 登录11'});
    //changeTitle(title)
    console.log("clicked...")
    console.log(this.state.title)
    changeTitle('永兰WMS系统 | 登录2')
    console.log("Test2...")
  }
  handleRegisterTitle() {
    this.setState({title: '永兰WMS系统 | 注册'});

  }

  render() {
    var text = this.state.liked ? '喜欢' : '不喜欢';
    var title = '永兰WMS系统 | 登录';
    return (
      <div>
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
      </div>
    )
  }
}



// END
