import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import AccountBanner from '../../components/AccountBanner/AccountBanner';
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
    fetch('http://10.58.7.182:8000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        account: inputId,
        password: inputPw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.message === 'SUCCESS') {
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
