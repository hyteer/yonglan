import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import RouteDemo from './demo/RouteDemo'
import Routers from './components/Routers'

ReactDOM.render(
  //<App />,
  <Routers />,
  document.getElementById('root')
);
