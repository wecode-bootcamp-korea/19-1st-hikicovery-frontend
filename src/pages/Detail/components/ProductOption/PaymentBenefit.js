import React, { Component } from 'react';
import './PaymentBenefit.scss';

class PaymentBenefit extends Component {
  render() {
    return (
      <ul className="paymentBenefit">
        <li className="paymentBenefitList text1">예상마일리지 : 5,450 (5%)</li>
        <li className="paymentBenefitList text2">신규 가입시 1만원 할일쿠폰</li>
        <li className="paymentBenefitList text3">공식몰 전제품 무료배송</li>
      </ul>
    );
  }
}

export default PaymentBenefit;
