import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <form className="loginForm">
              <div className="chkMemberBox">
                <div className="loginMember">회원</div>
                <div className="loginGuest">비회원(주문조회)</div>
              </div>
              <input
                className="inputId"
                name="inputId"
                type="text"
                placeholder="아이디"
                onChange={inputOnChange}
              />
              <input
                className="inputPw"
                name="inputPw"
                type="password"
                placeholder="비밀번호"
                onChange={inputOnChange}
              />
              <input className="saveId" type="checkbox" />
              아이디 저장
              <div className="loginBtnBox">
                <button className="loginBtn" onClick={chkLogin}>
                  로그인
                </button>
                <button className="loginNBtn">네이버 아이디 로그인</button>
              </div>
              <div className="loginLinkBox">
                <Link to="" className="findId">
                  아이디 찾기
                </Link>
                <Link to="" className="findPw">
                  비밀번호 찾기
                </Link>
                <Link to="/singup" className="singUp">
                  회원가입
                </Link>
              </div>
            </form>
          </div>
        </section>
      </article>
    );
  }
}

export default Login;
