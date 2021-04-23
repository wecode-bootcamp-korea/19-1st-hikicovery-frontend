import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { API_URL } from '../../config';
import AccountBanner from '../../components/AccountBanner/AccountBanner';
import PremiumContents from './PremiumContents/PremiumContents';
import './Signup.scss';

const TITLE = '회원가입';

class Signup extends Component {
  state = {
    form: {
      account: '',
      password: '',
      pwCheck: '',
      name: '',
      year: '',
      month: '',
      day: '',
      email: '',
      emailDot: '',
      phoneNum1: '',
      phoneNum2: '',
      phoneNum3: '',
    },
  };

  handleOnchange = e => {
    const { name, value } = e.target;
    const { form } = this.state;
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [name]: value,
      },
    });
  };

  singUpButton = () => {
    const {
      account,
      password,
      name,
      phoneNum1,
      phoneNum2,
      phoneNum3,
      year,
      month,
      day,
      email,
      emailDot,
    } = this.state.form;
    const date = year + '-' + month + '-' + day;
    const phoneNum = phoneNum1 + '-' + phoneNum2 + '-' + phoneNum3;
    const emailMix = email + '@' + emailDot;
    fetch(`${API_URL}users/signup`, {
      method: 'POST',
      body: JSON.stringify({
        account: account,
        password: password,
        name: name,
        birthday: date,
        phone_number: phoneNum,
        email: emailMix,
        address: '광주광역시',
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          this.props.history.push('/login');
        }
      });
  };

  render() {
    const { handleOnchange, singUpButton } = this;
    return (
      <div className="signUp">
        <AccountBanner title={TITLE} />
        <PremiumContents />
        <form className="signUpForm">
          <div className="signUpText">
            <h3>가입정보입력</h3>
            <p>
              <span className="nessaryIcon">*</span>
              필수입력
            </p>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">
              아이디<span className="nessaryIcon">*</span>
            </div>
            <div className="signUpInput">
              <input
                type="text"
                name="account"
                className="inputId"
                onChange={handleOnchange}
              />
              <p>
                아이디는 6~15자의 영문 소문자와 숫자만 사용 가능하며 특수문자는
                사용할 수 없습니다.
              </p>
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">
              비밀번호
              <span className="nessaryIcon">*</span>
            </div>
            <div className="signUpInput">
              <input
                type="password"
                name="password"
                className="inputPw"
                onChange={handleOnchange}
              />
              <p>
                영문, 숫자, 특수문자(!,@#$%^&*)를 두가지 이상 혼용하여 8~12자
                이내로 입력해야 합니다.
              </p>
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">
              비밀번호 확인
              <span className="nessaryIcon">*</span>
            </div>
            <div className="signUpInput">
              <input
                type="password"
                name="pwCheck"
                className="inputPw"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">
              이름
              <span className="nessaryIcon">*</span>
            </div>
            <div className="signUpInput">
              <input
                type="text"
                name="name"
                className="inputName"
                placeholder="이름(실명입력)"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">
              생년월일
              <span className="nessaryIcon">*</span>
            </div>
            <div className="signUpInput flexBox">
              <input
                type="text"
                name="year"
                className="inputBirth"
                placeholder="생년(4자)"
                maxLength="4"
                onChange={handleOnchange}
              />
              <input
                type="text"
                name="month"
                className="inputBirth"
                placeholder="월"
                maxLength="2"
                onChange={handleOnchange}
              />
              <input
                type="text"
                name="day"
                className="inputBirth"
                placeholder="일"
                maxLength="2"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">
              이메일
              <span className="nessaryIcon">*</span>
            </div>
            <div className="signUpInput flexBox">
              <input
                type="text"
                name="email"
                className="inputEmail"
                onChange={handleOnchange}
              />
              <span className="inputMargin">@</span>
              <input
                type="text"
                name="emailDot"
                className="inputEmail"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">
              휴대전화
              <span className="nessaryIcon">*</span>
            </div>
            <div className="signUpInput flexBox">
              <input
                className="inputPhone"
                type="text"
                maxLength="3"
                onChange={handleOnchange}
                name="phoneNum1"
              />
              <span className="inputMargin">-</span>
              <input
                className="inputPhone"
                type="text"
                maxLength="4"
                onChange={handleOnchange}
                name="phoneNum2"
              />
              <span className="inputMargin">-</span>
              <input
                className="inputPhone"
                type="text"
                maxLength="4"
                onChange={handleOnchange}
                name="phoneNum3"
              />
            </div>
          </div>
          <div className="underBar formUnder"></div>
        </form>

        <div className="buttonWrapper">
          <div className="buttonBox">
            <button
              className="cancleButton"
              onClick={() => this.props.history.push('/')}
            >
              취소
            </button>
            <button className="signUpButton" onClick={singUpButton}>
              확인
            </button>
          </div>
        </div>
        <div className="premiumInfoWrapper">
          <div className="premiumInfoBox">
            <strong className="premiumLawInfo">
              F&F membership은 회원님의 소중한 개인정보를 안전하게 관리하고
              있습니다.
            </strong>
            <p className="lawInfo">
              2017년 8월 18일 부터 시행되는 정보통신망 이용 촉진 및 정보보호
              등에 관한 법률(이하 정보통신망법) 제 23조의 2 ‘주민등록번호의 사용
              제한’에 따라 모든 서비스에서 주민등록번호를 입력 받지 않습니다.
              이에 따라 가입하실 때는 주민등록번호를 입력하는 실명인증 대신
              아이핀 인증이나 휴대폰, 신용카드, 공인인증서를 이용하여 본인인증
              하셔야 합니다.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Signup);
