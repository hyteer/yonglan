import React from "react"
//import { Link } from 'react-router'
//import NavLink from './NavLink'
import Login from './Login'

const changeTitle = (title) => {
  document.title = title
}

function LoginForm(props) {
  return (
    <div className="LoginApp">
      <div className="login-box-body">
          <p className="login-box-msg"></p>
          <form action="/erp/login/" method="post">
        <Login />
        </form><br/>
        <p>
          <a href="#">忘记密码?</a><br/>
          <a href="#" onClick={props.onClick} className="text-center">{props.linktext}</a>
        </p>
          <p onClick={props.handleClick}>
            你<b>{props.text}</b>我。点我切换状态。
          </p>
      </div>
    </div>
  );
}

function RegisterForm(props) {
  return (
    <div className="LoginApp">
      <div className="login-box-body">
          <p className="login-box-msg"></p>
          <form action="/erp/login/" method="post">
        <Login />

        </form><br/>
        <p>
          <a href="#">忘记密码?</a><br/>
          <a href="#" onClick={props.onClick} className="text-center">{props.linktext}</a>
        </p>
      </div>
    </div>
  );
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    //this.handleLoginClick = this.handleLoginClick.bind(this);
    //this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.changeLoginStatus = this.changeLoginStatus.bind(this);
    this.switchToLogin = this.switchToLogin.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      login: true,
      liked: false,
      counter: 0,
      title: '永兰WMS系统 | 登录'
    };
  }
  changeLoginStatus() {
    console.log("switch...")
    this.setState({login: !this.state.login});
    let title = this.state.login ? '永兰WMS系统 | 登录' : '永兰WMS系统 | 注册';
    changeTitle(title)
  }
  switchToLogin() {
    console.log("switch to login...")
    this.setState({login: false});
    changeTitle('永兰WMS系统 | 登录')
  }

  handleClick() {
    this.setState({liked: !this.state.liked});
  }
  handleCounter(){
    //let newcounter = this.state.counter
    console.log(this.state.title)
    //this.setState({counter: newcounter});
    console.log(this.state.counter);
  }

  render() {
    var text = this.state.liked ? '喜欢' : '不喜欢';
    const switchToRegister =() =>{
      console.log("switch to register...")
      changeTitle('永兰WMS系统 | 注册')
    };
    let form = null;
    let linkText = ''
    if (this.login) {
      linkText = '注册'
      console.log("Link:"+linkText)
      form = <LoginForm onClick={this.changeLoginStatus} linktext={linkText} text={text} changeText={this.handleClick}/>;
    } else {
      linkText = '登录'
      console.log("Link:"+linkText)
      form = <RegisterForm onClick={this.changeLoginStatus} linktext={linkText} text={text} changeText={this.handleClick}/>;
    }
    return (
      <div name="loginPage">
        {form}

        <p onClick={this.changeLoginStatus}>
          你<b>{text}</b>我。点我切换状态。
        </p>
        <button onClick={this.handleCounter}>计数</button>
      </div>
    )
  }
}
