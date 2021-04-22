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
      productInfo,
      isSelect,
      count,
    } = this.props;
    return (
      productInfo[0] !== undefined && (
        <div className="productOption">
          <PaymentTitle
            name={productInfo[0].name}
            price={productInfo[0].price}
            season={productInfo[0].season}
          />
          <PaymentBenefit />
          <PaymentOption
            productStock={productInfo[0].product_stock}
            count={count}
            onIncreaseCount={onIncreaseCount}
            onDecreaseCount={onDecreaseCount}
            color={productInfo[0].color}
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
