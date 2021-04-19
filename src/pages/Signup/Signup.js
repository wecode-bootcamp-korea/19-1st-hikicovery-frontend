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
      phoneNum1: '',
      phoneNum2: '',
      phoneNum3: '',
    },
    phoneNum: '',
    date: '',
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
          phoneNum: form.phoneNum1 + form.phoneNum2 + form.phoneNum3,
          date: form.year + form.month + form.day,
        });
      }
    );
  };

  render() {
    console.log(this.state.form);
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
        <form className="signUpForm">
          <div className="signUpItemBox">
            <div className="signUpItem">아이디*</div>
            <div className="signUpInput">
              <input
                type="text"
                name="account"
                onChange={this.handleOnchange}
              />
              <p>
                아이디는 6~15자의 영문 소문자와 숫자만 사용 가능하며 특수문자는
                사용할 수 없습니다.
              </p>
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">비밀번호*</div>
            <div className="signUpInput">
              <input
                type="password"
                name="password"
                onChange={handleOnchange}
              />
              <p>
                영문, 숫자, 특수문자(!,@#$%^&*)를 두가지 이상 혼용하여 8~12자
                이내로 입력해야 합니다.
              </p>
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">비밀번호 확인*</div>
            <div className="signUpInput">
              <input type="password" name="pwCheck" onChange={handleOnchange} />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">이름*</div>
            <div className="signUpInput">
              <input
                type="text"
                name="name"
                placeholder="이름(실명입력)"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">생년월일*</div>
            <div className="signUpInput flexBox">
              <input
                type="text"
                name="year"
                placeholder="생년(4자)"
                maxLength="4"
                onChange={handleOnchange}
              />
              <input
                type="text"
                name="month"
                placeholder="월"
                maxLength="2"
                onChange={handleOnchange}
              />
              <input
                type="text"
                name="day"
                placeholder="일"
                maxLength="2"
                onChange={handleOnchange}
              />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">이메일*</div>
            <div className="signUpInput flexBox">
              <input type="text" name="email" onChange={handleOnchange} />
              @
              <input type="text" name="emailDot" onChange={handleOnchange} />
            </div>
          </div>
          <div className="signUpItemBox">
            <div className="signUpItem">휴대전화*</div>
            <div className="signUpInput flexBox">
              <input
                type="text"
                maxLength="3"
                onChange={handleOnchange}
                name="phoneNum1"
              />
              -
              <input
                type="text"
                maxLength="4"
                onChange={handleOnchange}
                name="phoneNum2"
              />
              -
              <input
                type="text"
                maxLength="4"
                onChange={handleOnchange}
                name="phoneNum3"
              />
            </div>
          </div>
          <button>확인</button>
        </form>
      </div>
    );
  }
}

export default Signup;
