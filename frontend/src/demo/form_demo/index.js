import React from "react"
import SimpleForm from './components/simple'

class FormApp extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <FormApp />
      </Provider>
    );
  }
}
export default FormApp;
