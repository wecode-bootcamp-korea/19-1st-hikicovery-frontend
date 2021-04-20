import React, { Component } from 'react';
import PaymentTitle from './PaymentTitle';
import PaymentBenefit from './PaymentBenefit';
import PaymentOption from './PaymentOption';
import PaymentButton from './PaymentButton';
import PaymentBottom from './PaymentBottom';
import './ProductOption.scss';

class ProductOption extends Component {
  render() {
    const {
      onDecreaseCount,
      onIncreaseCount,
      count,
      handleClickColorList,
      product_info,
      isSelect,
    } = this.props;
    return (
      <div className="productOption">
        {product_info.map(element => {
          return (
            <PaymentTitle
              name={element.name}
              price={element.price}
              season={element.season}
            />
          );
        })}
        <PaymentBenefit />
        {product_info.map(element => {
          return (
            <PaymentOption
              product_stock={element.product_stock}
              count={count}
              onIncreaseCount={onIncreaseCount}
              onDecreaseCount={onDecreaseCount}
              color={element.color}
              isSelect={isSelect}
              handleClickColorList={handleClickColorList}
            />
          );
        })}
        <PaymentButton />
        <PaymentBottom />
      </div>
    );
  }
}

export default ProductOption;
