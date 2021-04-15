import React, { Component } from 'react';
import './InputForm.scss';
import InputItem from './InputItem/InputItem';

class InputForm extends Component {
  state = {
    inputInfo: [
      {
        id: 1,
        name: '아이디',
        idIsValued:
          ' 영문, 숫자, 특수문자(!@#$%^&*)를 두 가지 이상 혼용하여 8~12자 이내로 입력해야 합니다.',
      },
      {
        id: 2,
        name: '비밀번호',
        pwIsValued:
          '아이디는 6~15자의 영문 소문자와 숫자만 사용 가능하며 특수문자는 사용할 수 없습니다.',
      },
      {
        id: 3,
        name: '비밀번호 확인',
      },
      {
        id: 4,
        name: '이름',
        region: ['내국인', '외국인'],
      },
      {
        id: 5,
        name: '생년월일',
        sex: ['남자', '여자'],
      },
      {
        id: 6,
        name: '이메일',
      },

      {
        id: 7,
        name: '휴대전화',
      },
    ],
  };
  render() {
    const { inputInfo } = this.state;
    return (
      <article className="userFormContainer">
        <section className="userFormContentBox">
          <div className="userForm">
            <h3>가입 정보 입력</h3>
            <span className="necessary">*</span>
            <span>필수입력</span>
            <form>
              <table className="signUp">
                <tbody>
                  <InputItem inputInfo={inputInfo} />
                </tbody>
              </table>
            </form>
          </div>
        </section>
      </article>
    );
  }
}

export default InputForm;
