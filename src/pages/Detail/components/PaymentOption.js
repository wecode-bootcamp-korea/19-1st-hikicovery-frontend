import React, { Component } from 'react';
import OptionColor from './OptionColor';
import OptionSize from './OptionSize';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

class PaymentOption extends Component {
  render() {
    return (
      <ul className="payment_option_wrap">
        <OptionColor></OptionColor>
        <OptionSize></OptionSize>
        <li className="payment_option_count">
          <p className="payment_option_title">수량</p>
          <div className="count_wrap">
            <button className="down">
              <AiOutlineMinus />
            </button>
            <input type="button" />
            <button className="up">
              <AiOutlinePlus />
            </button>
          </div>
        </li>
        <li className="payment_option_delivery">
          <p className="payment_option_title">배송</p>
          <div className="delivery_inner">
            <input type="radio" name="tabmenu" id="tab01" checked="checked" />
            <label for="tab01">택배(무료배송)</label>
            <input type="radio" name="tabmenu" id="tab02" />
            <label for="tab02">매장픽업</label>
          </div>
        </li>
      </ul>
    );
  }
}

export default PaymentOption;
