import React, { Component } from 'react';
import './PaymentButton.scss';

class PaymentButton extends Component {
  render() {
    return (
      <div className="paymentButton">
        <button>BUY NOW</button>
        <button onClick={this.OnModal}>Add to cart</button>
      </div>
    );
  }
}

export default PaymentButton;
