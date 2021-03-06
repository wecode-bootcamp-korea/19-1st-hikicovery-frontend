import React, { Component } from 'react';
import OptionColor from '../OptionList/OptionColor';
import OptionSize from '../OptionList/OptionSize';
import OptionCount from '../OptionList/OptionCount';
import OptionDelivery from '../OptionList/OptionDelivery';
import './PaymentOption.scss';

class PaymentOption extends Component {
  render() {
    const {
      color,
      count,
      productStock,
      onIncreaseCount,
      onDecreaseCount,
      handleClickColorList,
      isSelect,
    } = this.props;
    return (
      <ul className="paymentOption">
        <OptionColor
          color={color}
          handleClickColorList={handleClickColorList}
          isSelect={isSelect}
        />
        <OptionSize productStock={productStock} isSelect={isSelect} />
        <OptionCount
          count={count}
          onIncreaseCount={onIncreaseCount}
          onDecreaseCount={onDecreaseCount}
        />
        <OptionDelivery />
      </ul>
    );
  }
}

export default PaymentOption;
