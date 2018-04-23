import React, { Component } from 'react';
import { FormInput } from '../FormInput/';

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
        <p>Hello login form!</p>
        <form onSubmit={this.handleSubmit.bind(this)} noValidate>
          <fieldset>
            <legend>Log in</legend>
            <FormInput type={'email'} name={'email'} label={'Email:'} handleChange={this.handleChange.bind(this)} value={this.props.user.email}/>
            <FormInput type={'password'} name={'password'} label={'Password:'} handleChange={this.handleChange.bind(this)} value={this.props.user.password}/>
            <FormInput type={'checkbox'} name={'remember'} label={'Remember me:'} handleChange={this.handleChange.bind(this)} value={this.props.user.remember}/>
            <input type="submit" value="Login" />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default LoginForm;