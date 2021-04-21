import React, { Component } from 'react';
import './PremiumContent.scss';

class PremiumContents extends Component {
  render() {
    return (
      <div className="premiumContents">
        <div className="premiumBox">
          <h3 className="premiumTitle">F&F 통합회원 가입</h3>
          <p className="premiumContent">
            Discovery Expedition의 회원이 되시면 하나의 동일한 ID와 비밀번호로
            Discovery Expedition은 물론, F&F의 패밀리 브랜드의 통합회원으로
            다양한 서비스를 안전하고 편리하게 이용하실 수 있습니다.
          </p>
          <p className="premiumContent">
            <strong className="premiumContentBold">F&F Family Brand </strong>
            <span className="premiumArrow">&gt;</span>Discovery Expedition, MLB,
            MLB KIDS, COLLECTED
          </p>
        </div>
      </div>
    );
  }
}

export default PremiumContents;
