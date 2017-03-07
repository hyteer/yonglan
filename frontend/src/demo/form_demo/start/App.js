import React from 'react'
//import ContactForm from './ContactForm';
import ContactForm from './SimpleForm';

class ContactPage extends React.Component {
  handleSubmit = (values) => {
    // Do something with the form values
    console.log("haha,u r here...")
    console.log(values);
  }
  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit} />
    );
  }
}

export default ContactPage
