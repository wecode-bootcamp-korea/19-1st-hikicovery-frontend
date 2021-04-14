import React, { Component } from 'react';
import './PaymentBottom.scss';
import { FaRegHeart } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';

class PaymentBottom extends Component {
  render() {
    return (
      <ul className="paymentBottom">
        <li>
          <a href="/">상품 리뷰(341)</a>
        </li>
        <li className="iconBox">
          <button className="share">
            <MdShare />
          </button>
          <button className="heart">
            <FaRegHeart />
          </button>
          <p className="heartCount">36</p>
        </li>
      </ul>
    );
  }
}

export default PaymentBottom;
