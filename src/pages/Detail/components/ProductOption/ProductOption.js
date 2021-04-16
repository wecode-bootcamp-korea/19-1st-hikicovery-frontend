import React, { Component } from 'react';
import PaymentTitle from './PaymentTitle';
import PaymentBenefit from './PaymentBenefit';
import PaymentOption from './PaymentOption';
import PaymentButton from './PaymentButton';
import PaymentBottom from './PaymentBottom';
import './ProductOption.scss';

class ProductOption extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
    };
  }

  componentDidMount() {
    fetch('http://10.58.0.206:8000/products/goods/1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.product_info[0].name,
        });
        console.log(res.product_info[0].name);
      });
  }

  render() {
    return (
      <div className="productOption">
        <PaymentTitle name={this.state.name} />
        <PaymentBenefit />
        <PaymentOption />
        <PaymentButton />
        <PaymentBottom />
      </div>
    );
  }
}

export default ProductOption;
