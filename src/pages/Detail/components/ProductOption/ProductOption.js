import React, { Component } from 'react';
import PaymentTitle from './PaymentTitle';
import PaymentBenefit from './PaymentBenefit';
import PaymentOption from './PaymentOption';
import PaymentButton from './PaymentButton';
import PaymentBottom from './PaymentBottom';
import './ProductOption.scss';

class ProductOption extends Component {
  render() {
    // console.log(this.props);
    const {
      name,
      price,
      product_stock,
      onDecrease,
      onIncrease,
      count,
      color,
      selectSizeBtn,
      selectColorBtn,
    } = this.props;
    return (
      <div className="productOption">
        <PaymentTitle name={name} price={price} />
        <PaymentBenefit />
        <PaymentOption
          product_stock={product_stock}
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          color={color}
          selectSizeBtn={selectSizeBtn}
          selectColorBtn={selectColorBtn}
        />
        <PaymentButton />
        <PaymentBottom />
      </div>
    );
  }
}

export default ProductOption;
