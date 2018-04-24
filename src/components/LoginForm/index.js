import React, { Component } from 'react';
import { FormInput } from '../FormInput/';
import './LoginForm.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onLogin();
  };
  
  handleChange(e) {
    this.props.onChange(e);
  }

  render() {
    return (
      <div className="LoginForm">
        <h1 className="LoginForm-header">Blue castle</h1>
        <form onSubmit={this.handleSubmit.bind(this)} noValidate>
          <fieldset className="LoginForm-fieldset">
            <legend className="LoginForm-legend">Log in</legend>
            <div className="LoginForm-inputs-container">
              <FormInput type={'email'} name={'email'} label={'Email'} handleChange={this.handleChange.bind(this)} value={this.props.user.email}/>
              <FormInput type={'password'} name={'password'} label={'Password'} handleChange={this.handleChange.bind(this)} value={this.props.user.password}/>
            </div>
            <FormInput type={'checkbox'} name={'remember'} label={'Remember me'} handleChange={this.handleChange.bind(this)} value={this.props.user.remember}/>
            <input className="LoginForm-submit" type="submit" value="Login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LoginForm;