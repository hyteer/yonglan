import React, { Component } from 'react';
import './App.css';
import DemoApp from './demo/App'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>Main</h2>
        <DemoApp />
      </div>
    );
  }
}

export default App;
