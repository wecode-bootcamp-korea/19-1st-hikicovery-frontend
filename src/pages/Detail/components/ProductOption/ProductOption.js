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
      handleClickColorList,
      product_info,
      isSelect,
      count,
    } = this.props;
    return (
      product_info[0] !== undefined && (
        <div className="productOption">
          <PaymentTitle
            name={product_info[0].name}
            price={product_info[0].price}
            season={product_info[0].season}
          />
          <PaymentBenefit />
          <PaymentOption
            product_stock={product_info[0].product_stock}
            count={count}
            onIncreaseCount={onIncreaseCount}
            onDecreaseCount={onDecreaseCount}
            color={product_info[0].color}
            isSelect={isSelect}
            handleClickColorList={handleClickColorList}
          />
          <PaymentButton />
          <PaymentBottom />
        </div>
      )
    );
  }
}

export default ProductOption;
