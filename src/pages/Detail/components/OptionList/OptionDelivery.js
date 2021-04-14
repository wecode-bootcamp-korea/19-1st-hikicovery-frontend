import React, { Component } from 'react';
import './OptionDelivery.scss';

class OptionDelivery extends Component {
  render() {
    return (
      <li className="optionDelivery">
        <p className="paymentOptionTitle">배송</p>
        <div className="deliveryInner">
          <input type="radio" name="tabmenu" id="tab01" checked="checked" />
          <label for="tab01">택배(무료배송)</label>
          <input type="radio" name="tabmenu" id="tab02" />
          <label for="tab02">매장픽업</label>
        </div>
      </li>
    );
  }
}

export default OptionDelivery;
