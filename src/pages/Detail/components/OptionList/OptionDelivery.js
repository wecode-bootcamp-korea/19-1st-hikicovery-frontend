import React, { Component } from 'react';
import './OptionDelivery.scss';

class OptionDelivery extends Component {
  render() {
    return (
      <li className="optionDelivery">
        <p className="paymentOptionTitle">배송</p>
        <div className="deliveryInner">
          <input type="radio" name="tabmenu" checked="checked" />
          <label htmlFor="tab01">택배(무료배송)</label>
          <input type="radio" name="tabmenu" />
          <label htmlFor="tab02">매장픽업</label>
        </div>
      </li>
    );
  }
}

export default OptionDelivery;
