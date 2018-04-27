import React from 'react';
import 'material-components-web/dist/material-components-web.css';
import Input from './Input'

function Form({ onSubmit }) {
  return(
    <form className="signup-form mdc-theme--dark" onSubmit={onSubmit}>
      <Input
        type="text"
        name="firstrname"
        placeholder="Name" />
      <Input
        type="text"
        name="lastname"
        placeholder="Lastname" />
      <Input
        type="text"
        name="email"
        placeholder="Email" />
      <Input
        type="password"
        name="fPassword"
        placeholder="Password" />
        <button
          type="submit"
          className="mdc-button mdc-button--primary mdc-button--raised">
          Registration
        </button>
    </form>
  );
}
export default Form;
