import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/Nav/Nav';
import FixMenuBar from '../../components/FixMenuBar/FixMenuBar';
import InputForm from './InputForm/InputForm';
import './Signup.scss';

import { RiArrowRightSLine } from 'react-icons/ri';

class Signup extends Component {
  render() {
    return (
      <div className="singUp">
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
        <Nav />
        <FixMenuBar />
        <InputForm />
      </div>
    );
  }
}

export default Signup;
