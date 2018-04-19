import React, { Component } from 'react';
import { FormInput } from '../FormInput/';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      formFields: [
        {
          type: 'text',
          name: 'email',
          label: 'Email',
          order: 1
        }, {
          type: 'password',
          name: 'password',
          label: 'Password',
          order: 2
        }, {
          type: 'checkbox',
          name: 'remember',
          label: 'Remember me',
          order: 3
        }
      ]
    }
  }
  render() {
    return (
      <div className="LoginForm">
        <p>Hello login form!</p>
        <form>
          <fieldset>
            {this.state.formFields.map(
              f => <FormInput key={f.order} type={f.type} name={f.name} label={f.label}/>
              )}
            <input type="submit" value="Login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LoginForm;