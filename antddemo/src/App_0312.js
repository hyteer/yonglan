import React, { Component } from 'react';
import { Button } from 'antd';
import './App.css';
import First from './components/First'
import LoginForm from './components/LoginForm'
import GridDemo from './layouts/FristGrid'
import StyleDemo from './demo/StyleDemo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <First name="My first antd demo."/>
        <div id="login">
        <h3>Login Form</h3>
        <LoginForm id="myLoginForm" />
        </div>
        <div className="gridDemo">
          <GridDemo />
        </div>
        <div>
          <StyleDemo />
        </div>
      </div>
    );
  }
}

export default App;
