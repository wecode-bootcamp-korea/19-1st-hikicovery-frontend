import { useState } from 'react';
import { withRouter } from 'react-router-dom';
import LoginForm from './LoginForm';
import AccountBanner from '../../components/AccountBanner/Index';
import { API_URL } from '../../config';
import styled from 'styled-components';
import axios from 'axios';

const TITLE = '로그인';

function Login() {
  const [formData, setFormData] = useState({
    account: '',
    password: '',
  });

  const { account, password } = formData;

  const handleOnChangeForm = e => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const chkLogin = e => {
    e.preventDefault();
    fetch(`${API_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({
        account,
        password,
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

  // const chkLogin = async e => {
  //   e.preventDefault();
  //   const bodyData = {
  //     account,
  //     password,
  //   };
  //   try {
  //     const response = await axios.post(`${API_URL}/users/login`, bodyData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <>
      <AccountBanner title={TITLE} />
      <LoginContainer>
        <LoginContents>
          <LoginWrap>
            <LoginForm
              handleOnChangeForm={handleOnChangeForm}
              chkLogin={chkLogin}
              formData={formData}
            />
          </LoginWrap>
        </LoginContents>
      </LoginContainer>
    </>
  );
}

const LoginContainer = styled.article`
  display: flex;
  justify-content: center;
`;

const LoginContents = styled.section`
  display: flex;
  justify-content: center;
  max-width: 1280px;
  min-width: 1100px;
  min-height: 1000px;
`;

const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 750px;
`;

export default withRouter(Login);
