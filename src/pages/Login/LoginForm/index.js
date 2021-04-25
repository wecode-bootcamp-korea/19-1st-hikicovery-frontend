import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LoginForm = ({ formData, chkLogin, handleOnChangeForm }) => {
  const { account, password } = formData;
  return (
    <Cotainer>
      <ChkMemberBox>
        <div>회원</div>
        <div>비회원(주문조회)</div>
      </ChkMemberBox>
      <IdPwInput
        name="account"
        type="text"
        placeholder="아이디"
        onChange={handleOnChangeForm}
        value={account}
      />
      <IdPwInput
        name="password"
        type="password"
        placeholder="비밀번호"
        onChange={handleOnChangeForm}
        value={password}
      />
      <input className="saveId" type="checkbox" />
      <span>아이디 저장</span>
      <LoginBtnBox>
        <button className="loginBtn" onClick={chkLogin}>
          로그인
        </button>
        <button className="loginNBtn">네이버 아이디 로그인</button>
      </LoginBtnBox>
      <LoginLinkBox>
        <LinkStyle to="">아이디 찾기</LinkStyle>
        <LinkStyle to="">비밀번호 찾기</LinkStyle>
        <LinkStyle to="/singup">회원가입</LinkStyle>
      </LoginLinkBox>
    </Cotainer>
  );
};

const Cotainer = styled.form`
  margin: 100px 0;
  width: 400px;

  .saveId {
    margin: 15px 5px 15px;
  }
`;

const IdPwInput = styled.input`
  margin: 5px 0;
  height: 100px;
  border: 1px solid #ddd;
`;

const ChkMemberBox = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    width: 200px;
    border-bottom: 1px solid black;
    font-size: 18px;
  }
`;

const LoginLinkBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  font-size: 12px;
`;

const LinkStyle = styled(Link)`
  display: block;
  width: 200px;
  text-align: center;
  & + & {
    border-left: 1px solid #333;
  }
`;

const LoginBtnBox = styled.div`
  display: flex;
  flex-direction: column;
  .loginBtn,
  .loginNBtn {
    margin: 5px 0;
    height: 40px;
    cursor: pointer;
  }

  .loginBtn {
    background-color: black;
    color: white;
  }

  .loginNBtn {
    border: 1px solid #ddd;
    background-color: white;
    color: #666;
  }
`;

export default LoginForm;
