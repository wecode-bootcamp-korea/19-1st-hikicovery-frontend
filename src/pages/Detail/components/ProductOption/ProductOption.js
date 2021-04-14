import React, { Component } from 'react';
import PaymentTitle from './PaymentTitle';
import PaymentBenefit from './PaymentBenefit';
import PaymentOption from './PaymentOption';
import PaymentButton from './PaymentButton';
import PaymentBottom from './PaymentBottom';
import './ProductOption.scss';

class ProductOption extends Component {
  render() {
    return (
      <div className="productOption">
        <PaymentTitle />
        <PaymentBenefit />
        <PaymentOption />
        <PaymentButton />
        <PaymentBottom />
      </div>
    );
  }
}

export default ProductOption;
