import React, { Component } from 'react';
import LoginForm from './LoginForm/LoginForm';
import './Login.scss';

class Login extends Component {
  state = {
    inputId: '',
    inputPw: '',
  };

  inputOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  chkLogin = () => {};

  render() {
    const { inputOnChange, chkLogin } = this;
    return (
      <article className="loginContainer">
        <section className="loginContents">
          <div className="loginWrap">
            <LoginForm inputOnChange={inputOnChange} chkLogin={chkLogin} />
          </div>
        </section>
      </article>
    );
  }
}

export default Login;
