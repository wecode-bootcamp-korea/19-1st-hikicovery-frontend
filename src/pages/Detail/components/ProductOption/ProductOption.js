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
      name,
      price,
      stockSize,
      stock,
      onDecrease,
      onIncrease,
      count,
      sizeList,
      colorList,
      selectSizeBtn,
      selectColorBtn,
      select,
      soldOut,
      reveiwList,
    } = this.props;
    return (
      <div className="productOption">
        <PaymentTitle name={name} price={price} />
        <PaymentBenefit />
        <PaymentOption
          stockSize={stockSize}
          stock={stock}
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
          colorList={colorList}
          sizeList={sizeList}
          select={select}
          soldOut={soldOut}
          selectSizeBtn={selectSizeBtn}
          selectColorBtn={selectColorBtn}
        />
        <PaymentButton />
        <PaymentBottom reveiwList={reveiwList} />
      </div>
    );
  }
}

export default ProductOption;
