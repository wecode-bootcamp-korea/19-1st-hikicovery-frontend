import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import AccountBanner from '../../components/AccountBanner/AccountBanner';
import { API_URL } from '../../config';
import './Login.scss';

const TITLE = '로그인';

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

  chkLogin = e => {
    e.preventDefault();
    const { inputId, inputPw } = this.state;
    fetch(`${API_URL}users/login`, {
      method: 'POST',
      body: JSON.stringify({
        account: inputId,
        password: inputPw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
          localStorage.setItem('token', data.token);
          this.props.history.push('/');
        }
      });
  };

  render() {
    const { inputOnChange, chkLogin } = this;
    return (
      <>
        <AccountBanner title={TITLE} />
        <article className="loginContainer">
          <section className="loginContents">
            <div className="loginWrap">
              <LoginForm inputOnChange={inputOnChange} chkLogin={chkLogin} />
            </div>
          </section>
        </article>
      </>
    );
  }
}

export default withRouter(Login);
