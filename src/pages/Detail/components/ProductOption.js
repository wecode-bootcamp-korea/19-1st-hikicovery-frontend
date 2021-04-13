import React, { Component } from 'react';
import PaymentTitle from './PaymentTitle';
import PaymentBenefit from './PaymentBenefit';
import PaymentOption from './PaymentOption';
import PaymentBottom from './PaymentBottom';

class ProductOption extends Component {
  render() {
    return (
      <div className="payment_wrap">
        <PaymentTitle />
        <PaymentBenefit />
        <PaymentOption />
        <div className="button_wrap">
          <button>BUY NOW</button>
          <button>Add to cart</button>
        </div>
        <PaymentBottom />
      </div>
    );
  }
}

export default ProductOption;
