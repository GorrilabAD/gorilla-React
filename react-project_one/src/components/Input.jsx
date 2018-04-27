import React from 'react';
import 'material-components-web/dist/material-components-web.css';

function Input({type, name, placeholder}) {
  return(
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="mdc-textfield__input"/>

  );
}
export default Input;
