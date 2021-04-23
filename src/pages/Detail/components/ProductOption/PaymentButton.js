import React, { Component } from 'react';
import { API_URL } from '../../../../config';
import { withRouter } from 'react-router-dom';
import './PaymentButton.scss';

class PaymentButton extends Component {
  goToBasket = () => {
    fetch(`${API_URL}cart`, {
      method: 'POST',
      body: JSON.stringify({
        product: 1,
        size: 1,
        quantity: 1,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === 'SUCCESS') {
          this.props.history.push('/basket');
        }
      });
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

export default withRouter(PaymentButton);
