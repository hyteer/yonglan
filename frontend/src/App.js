import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Home</h2>
        </div>
        <p className="App-intro">
          An django react project,Hacked by YT.
        </p>
        <a href="#">I forgot my password</a><br/>
        <a href="register.html" class="text-center">Register a new membership</a>
      </div>
    );
  }
}

export default App;
