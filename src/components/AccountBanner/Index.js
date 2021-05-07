import React from 'react';
import { Link } from 'react-router-dom';
import { RiArrowRightSLine } from 'react-icons/ri';
import styled from 'styled-components';
import { flexCenter } from '../../styles/mixin';

const AccountBanner = ({ title }) => {
  return (
    <AccountBannerWrap>
      <UserFormBanner>
        <h2>{title}</h2>
        <BannerLinkPaths>
          <Link to="">Home</Link>
          <ArrowIconBox>
            <RiArrowRightSLine />
          </ArrowIconBox>
          <Link to="">{title}</Link>
        </BannerLinkPaths>
        <UnderBar></UnderBar>
      </UserFormBanner>
    </AccountBannerWrap>
  );
};

const AccountBannerWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  height: 148px;
`;

const UserFormBanner = styled.div`
  margin: 0 220px;
  width: 100%;
  max-width: 1280px;
`;

const UnderBar = styled.div`
  margin: 0 auto;
  height: 3px;
  background: black;
`;

const BannerLinkPaths = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
  margin-bottom: 14px;
`;

const ArrowIconBox = styled.div`
  ${flexCenter}
  width: 20px;
`;

export default AccountBanner;
