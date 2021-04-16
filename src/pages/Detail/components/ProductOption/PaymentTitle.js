import React, { Component } from 'react';
import './PaymentTitle.scss';

class PaymentTitle extends Component {
  render() {
    return (
      <div className="paymentTitle">
        <h3 className="productName">{this.props.name}</h3>
        <h5 className="productCode">DXSHF1111_GR(그레이)/봄</h5>
        <h4 className="productPrice">109,000원</h4>
      </div>
    );
  }
}

export default PaymentTitle;
