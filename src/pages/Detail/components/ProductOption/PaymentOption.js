import React, { Component } from 'react';
import OptionColor from '../OptionList/OptionColor';
import OptionSize from '../OptionList/OptionSize';
import OptionCount from '../OptionList/OptionCount';
import OptionDelivery from '../OptionList/OptionDelivery';
import './PaymentOption.scss';

class PaymentOption extends Component {
  render() {
    const {
      colorList,
      sizeList,
      count,
      stock,
      stockSize,
      onIncrease,
      onDecrease,
      soldOut,
    } = this.props;
    return (
      <ul className="paymentOption">
        <OptionColor colorList={colorList} />
        <OptionSize
          sizeList={sizeList}
          stockSize={stockSize}
          stock={stock}
          soldOut={soldOut}
        />
        <OptionCount
          count={count}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
        <OptionDelivery />
      </ul>
    );
  }
}

export default PaymentOption;
