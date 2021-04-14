import React, { Component } from 'react';
import OptionColor from '../OptionList/OptionColor';
import OptionSize from '../OptionList/OptionSize';
import OptionCount from '../OptionList/OptionCount';
import OptionDelivery from '../OptionList/OptionDelivery';
import './PaymentOption.scss';

class PaymentOption extends Component {
  render() {
    return (
      <ul className="paymentOption">
        <OptionColor />
        <OptionSize />
        <OptionCount />
        <OptionDelivery />
      </ul>
    );
  }
}

export default PaymentOption;
