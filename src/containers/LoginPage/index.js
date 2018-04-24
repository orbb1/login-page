import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/';
import { ErrorMessage } from '../../components/ErrorMessage/';
import { errors, patterns } from '../../shared/const';
import './LoginPage.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      remember: false,
      loggedIn: false,
      message: {isError: false, text: ''}
    }

    this.mockValidation = this.mockValidation.bind(this);
    this.throWError = this.throWError.bind(this);
    this.redirect = this.redirect.bind(this);
  }

  mockValidation(userData) {
    const { EMAIL_ERROR, PASSWORD_ERROR, USER_ERROR } = errors;
    const { EMAIL_PATTERN, PASSWORD_PATTERN, USER_EMAL_PATTERN, USER_PASSWORD_PATTERN } = patterns;
    const goodEmail = userData.email.match(EMAIL_PATTERN);
    const goodPassword = userData.password.match(PASSWORD_PATTERN);
    const goodData = userData.email.toLowerCase().match(USER_EMAL_PATTERN) 
                      && userData.password.match(USER_PASSWORD_PATTERN);
    const isloggedIn = (!(!goodEmail && this.throWError(EMAIL_ERROR)) 
                        && !(!goodPassword && this.throWError(PASSWORD_ERROR))) 
                        && !(!goodData && this.throWError(USER_ERROR));
    
    this.setState({loggedIn: isloggedIn});
    
    if (isloggedIn) {
      let message = {...this.state.message};
      message.isError = false;
      message.text = '';
      this.setState({message});
    }
  }

  throWError(error) {
    let message = {...this.state.message};
    message.isError = true;
    message.text = error;
    this.setState({message});
    return true;
  }

  redirect() {
    console.log('redirecting!');
  }

  onLogin() {
    this.mockValidation(this.state);
    setTimeout(() => { this.state.loggedIn && this.redirect() })
  }

  onChange(e) {
    this.setState({[e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value})
  }

  render() {
    return (
      <div className={`LoginPage-wpapper ${this.state.message.isError ? `is-error` : ``}`}>
        {this.state.message.isError && <ErrorMessage message={this.state.message.text} />}
        {this.state.loggedIn
          ? <p>Congrats, {this.state.email}!</p>
          : <LoginForm onChange={(e) => this.onChange(e)} onLogin={this.onLogin.bind(this)} user={this.state} />}
      </div>
    );
  }
}

export default LoginPage;