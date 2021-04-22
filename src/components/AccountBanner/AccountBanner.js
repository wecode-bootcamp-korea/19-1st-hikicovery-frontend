import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import './AccountBanner.scss';

class AccountBanner extends Component {
  render() {
    const { title } = this.props;
    return (
      <div className="accountBanner">
        <div className="userFormBanner">
          <h2 className="bannerTitle">{title}</h2>
          <div className="bannerLinkPaths">
            <Link to="">Home</Link>
            <div className="arrowIcon">
              <RiArrowRightSLine />
            </div>
            <Link to="">{title}</Link>
          </div>
          <div className="underBar"></div>
        </div>
      </div>
    );
  }
}

export default AccountBanner;
