import React, { Component } from 'react';
import LoginForm from '../../conponents/LoginForm/';

class LoginPage extends Component {
  render() {
    return (
      <div className="LoginPage-wpapper">
        Hello login page!
        <LoginForm />
      </div>
    );
  }
}

export default LoginPage;