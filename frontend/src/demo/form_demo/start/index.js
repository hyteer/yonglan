import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import App from './App'

const reducers = {
  // ... your other reducers here ...
  form: formReducer     // <---- Mounted at 'form'
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)

class FormApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <App />
      </Provider>
    );
  }
}
export default FormApp;
