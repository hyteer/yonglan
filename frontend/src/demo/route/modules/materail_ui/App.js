import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MyAwesomeReactComponent from './First';

injectTapEventPlugin();

export default React.createClass({
  render() {
    return (
      <MuiThemeProvider>
        <div>
        <h3>MaterialDemo</h3>
        <MyAwesomeReactComponent />
      </div>
      </MuiThemeProvider>
    )
  }
})
