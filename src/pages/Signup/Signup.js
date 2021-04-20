import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import './Signup.scss';

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
    phoneNum: '',
    date: '',
    email: '',
  };

  handleOnchange = e => {
    const { name, value } = e.target;
    const { form } = this.state;
    this.setState(
      {
        ...this.state,
        form: {
          ...this.state.form,
          [name]: value,
        },
      },
      () => {
        this.setState({
          phoneNum:
            form.phoneNum1 + '-' + form.phoneNum2 + '-' + form.phoneNum3,
          date: form.year + '-' + form.month + '-' + form.day,
          email: form.email + '@' + form.emailDot,
        });
      }
    );
  };

  goTo = () => {
    fetch('http://10.58.7.182:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        account: this.state.form.account,
        password: this.state.form.password,
        name: this.state.form.name,
        birthday: this.state.date,
        phone_number: this.state.phoneNum,
        email: this.state.email,
      }),
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        if (res.token) {
          localStorage.setItem('wtw-token', res.token);
        }
      });
  };

  // componentDidMount() {
  //   // const requestOption = {
  //   //   method: 'POST',
  //   //   Headers: { 'Content-Type': 'application/json' },
  //   //   body: JSON.stringify({
  //   //     account: this.state.account,
  //   //     password: this.state.password,
  //   //     name: this.state.name,
  //   //     date: this.state.date,
  //   //     phoneNum: this.state.phoneNum,
  //   //     email: this.state.email,
  //   //   }),
  //   // };
  // }

  render() {
    console.log(this.state.date);
    const { handleOnchange } = this;
    return (
      <div className="signUp">
        <div className="accountBanner">
          <div className="userFormBanner">
            <h2 className="bannerTitle">회원가입</h2>
            <div className="bannerLinkPaths">
              <Link to="">Home</Link>
              <div className="arrowIcon">
                <RiArrowRightSLine />
              </div>
              <Link to="">회원가입</Link>
            </div>
            <div className="underBar"></div>
          </div>
        </div>
        <div className="premiumWrapper">
          <div className="premiumBox">
            <h3 className="premiumTitle">F&F 통합회원 가입</h3>
            <p className="premiumContent">
              Discovery Expedition의 회원이 되시면 하나의 동일한 ID와 비밀번호로
              Discovery Expedition은 물론, F&F의 패밀리 브랜드의 통합회원으로
              다양한 서비스를 안전하고 편리하게 이용하실 수 있습니다.
            </p>
            <p className="premiumContent">
              <strong className="premiumContentBold">F&F Family Brand </strong>
              <span className="premiumArrow">&gt;</span>Discovery Expedition,
              MLB, MLB KIDS, COLLECTED
            </p>
          </div>
        </div>

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
                onChange={this.handleOnchange}
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
            <button className="cancleButton">취소</button>
            <button className="signUpButton" onClick={this.goTo}>
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

export default Signup;
