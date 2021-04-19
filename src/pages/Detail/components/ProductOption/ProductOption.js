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
      onDecrease,
      onIncrease,
      count,
      handleClickColorList,
      get,
      isSelect,
      season,
    } = this.props;
    return (
      <div className="productOption">
        {get.map(element => {
          return (
            <PaymentTitle
              name={element.name}
              price={element.price}
              season={season}
            />
          );
        })}
        <PaymentBenefit />
        {get.map(element => {
          return (
            <PaymentOption
              product_stock={element.product_stock}
              count={count}
              onIncrease={onIncrease}
              onDecrease={onDecrease}
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
