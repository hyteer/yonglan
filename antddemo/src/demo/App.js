import React, { Component } from 'react';
import { Button } from 'antd';
import First from './First'
import LoginForm from './LoginForm'
import GridDemo from './FristGrid'
import StyleDemo from './StyleDemo'
import LayoutDemo from './FirstLayout'

class DemoApp extends Component {
  render() {
    return (
      <div className="App">
        <h2>Demo Home</h2>
        <Button type="primary">Button</Button>
        <First name="My first antd demo."/>

        <div className="gridDemo">
          <GridDemo />
        </div>

        <div id="login">
          <h3>Login Form</h3>
          <LoginForm id="myLoginForm" />
        </div>

        <div>
          <StyleDemo />
        </div>

      </div>
    );
  }
}

export default DemoApp;
