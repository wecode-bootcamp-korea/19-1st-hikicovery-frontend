import React, { Component } from 'react';

class PaymentBenefit extends Component {
  render() {
    return (
      <ul className="payment_benefit">
        <li className="payment_benefit_list text1">
          예상마일리지 : 5,450 (5%)
        </li>
        <li className="payment_benefit_list text2">
          신규 가입시 1만원 할일쿠폰
        </li>
        <li className="payment_benefit_list text3">공식몰 전제품 무료배송</li>
      </ul>
    );
  }
}

export default PaymentBenefit;
