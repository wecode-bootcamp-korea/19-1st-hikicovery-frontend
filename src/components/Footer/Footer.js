import React, { Component } from 'react';
import './Footer.scss';
import { IoLogoGithub, IoLogoInstagram } from 'react-icons/io';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footerWrap">
          <div class="footerLeft">
            <ul>
              <li className="footerNav">
                <ul className="footerNavInner">
                  {FOOTERTEXT.map((element, index) => {
                    return (
                      <li key={index}>
                        <a href="/">{element}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="footerAddress">
                <p className="footerDes">
                  서울시 강남구 테헤란로 427 위워크 타워(위워크 선릉 2호점) 10층
                  (주)히키커버리
                </p>
              </li>
              <li className="footerInfo">
                <p className="footerDes">개인정보보호책임자 : 히키커버리</p>
                <p className="footerDes">E-MAIL : discovery@fnfcorp.com</p>
                <p className="footerDes">FAX : 02-520-0990</p>
              </li>
            </ul>
          </div>
          <div class="footerRight">
            <ul>
              <li class="footerIconWrap">
                <a href="/">
                  <IoLogoGithub />
                </a>
                <a href="/">
                  <IoLogoInstagram />
                </a>
              </li>
              <li>
                <h2>CS CENTER 080-820-8802</h2>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

const FOOTERTEXT = [
  '공지사항',
  '매장안내',
  '단채구매문의',
  '제휴문의',
  '대리점 개설문의',
  '고객센터',
  '1:1 고객상담',
];
