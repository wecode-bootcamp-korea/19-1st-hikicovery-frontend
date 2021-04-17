import React, { Component } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './OptionCount.scss';

class OptionCount extends Component {
  render() {
    const { count, onDecrease, onIncrease } = this.props;
    return (
      <li className="optionCount">
        <p className="paymentOptionTitle">수량</p>
        <div className="countWrap">
          <button className="down" onClick={onDecrease}>
            <AiOutlineMinus />
          </button>
          <input type="button" value={count} />
          <button className="up" onClick={onIncrease}>
            <AiOutlinePlus />
          </button>
        </div>
      </li>
    );
  }
}

export default OptionCount;
