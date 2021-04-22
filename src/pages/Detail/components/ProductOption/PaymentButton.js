import React, { Component } from 'react';
import './PaymentButton.scss';

class PaymentButton extends Component {
  goToBasket = () => {
    this.props.history.push('/basket');
  };

  render() {
    return (
      <div className="paymentButton">
        <button>BUY NOW</button>
        <button onClick={this.goToBasket}>Add to cart</button>
      </div>
    );
  }
}

export default PaymentButton;
