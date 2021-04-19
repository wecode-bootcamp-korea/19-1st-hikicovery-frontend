import React, { Component } from 'react';
import OptionColor from '../OptionList/OptionColor';
import OptionSize from '../OptionList/OptionSize';
import OptionCount from '../OptionList/OptionCount';
import OptionDelivery from '../OptionList/OptionDelivery';
import './PaymentOption.scss';

class PaymentOption extends Component {
  render() {
    const { color, count, product_stock, onIncrease, onDecrease } = this.props;
    console.log(this.props);
    return (
      <ul className="paymentOption">
        <OptionColor color={color} />
        <OptionSize product_stock={product_stock} />
        <OptionCount
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <OptionDelivery />
      </ul>
    );
  }
}

export default PaymentOption;
