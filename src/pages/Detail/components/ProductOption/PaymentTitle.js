import React, { Component } from 'react';
import './PaymentTitle.scss';

class PaymentTitle extends Component {
  render() {
    const { name, price, season } = this.props;
    return (
      <div className="paymentTitle">
        <h3 className="productName">{name}</h3>
        <h5 className="productCode">DXSHF1111/{season}</h5>
        <h4 className="productPrice">{price.toLocaleString()}</h4>
      </div>
    );
  }
}

export default PaymentTitle;
