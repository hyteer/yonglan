import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { combineForms } from 'react-redux-form';

//import MyForm from './components/my-form-component';
import ReduxForm from './components/simple'

const initialUser = { name: '' };

const store = createStore(combineForms({
  user: initialUser,
}));

class FormApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <MyForm />
      </Provider>
    );
  }
}
export default FormApp;
