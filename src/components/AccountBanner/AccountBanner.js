import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import './AccountBanner.scss';

class AccountBanner extends Component {
  render() {
    return (
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
    );
  }
}

export default AccountBanner;
