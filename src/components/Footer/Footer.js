import React, { Component } from 'react';
import './Footer.scss';
import { IoLogoVenmo, IoLogoGithub, IoLogoInstagram } from 'react-icons/io';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div class="footerLeft">
          <ul>
            <li className="footerNav">
              <ul className="footerNavInner">
                <li>
                  <a href="/">공지사항</a>
                </li>
                <li>
                  <a href="/">매장안내</a>
                </li>
                <li>
                  <a href="/">단체구매문의</a>
                </li>
                <li>
                  <a href="/">제휴문의</a>
                </li>
                <li>
                  <a href="/">대리점 개설문의</a>
                </li>
                <li>
                  <a href="/">고객센터</a>
                </li>
                <li>
                  <a href="/">1:1 고객상담</a>
                </li>
              </ul>
            </li>
            <li>
              <p>
                서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점) 10층
                (주)히키커버리
              </p>
            </li>
            <p>개인정보보호책임자 : 히키커버리</p>
            <li>
              <p>개인정보보호책임자 : 히키커버리</p>
              <p>E-MAIL : discovery@fnfcorp.com</p>
              <p>FAX : 02-520-0990</p>
            </li>
          </ul>
        </div>
        <div class="footerRight">
          <ul>
            <li class="footerIconWrap">
              <IoLogoVenmo />
              <IoLogoGithub />
              <IoLogoInstagram />
            </li>
            <li>
              <h2>CS CENTER 080-820-8802</h2>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
