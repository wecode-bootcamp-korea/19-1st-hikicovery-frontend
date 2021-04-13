import React, { Component } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';

class PaymentBottom extends Component {
  render() {
    return (
      <ul className="payment_bottom">
        <li>
          <a href="/">상품 리뷰(341)</a>
        </li>
        <li className="icon_box">
          <button className="share">
            <MdShare />
          </button>
          <button className="heart">
            <FaRegHeart />
          </button>
          <p className="heart_count">36</p>
        </li>
      </ul>
    );
  }
}

export default PaymentBottom;
