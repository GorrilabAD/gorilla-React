import React, { Component} from 'react';
import './App.css';




class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ''
    };
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('form is submited. Email value is', this.state.email);
  }

  handleEmailChange(event) {
    this.setState({email:event.target.value});
    console.log('email was changed', event.target.value);

  }

  render() {
    return(
    <form onSubmit={this.handleSubmit}>
      <input
        type="text"
        placeholder="E-mail"
        value={this.state.email}
        onChange={this.handleEmailChange}
      />
      <button onClick={localStorage.setItem('save', this.state.email)}>Save</button>
      <div><h1>{this.state.email}</h1></div>
    </form>
)
  }
}

export default RegistrationForm;
