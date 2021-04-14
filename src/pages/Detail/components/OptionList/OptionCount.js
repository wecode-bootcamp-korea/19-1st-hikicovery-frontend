import React, { Component } from 'react';
import './OptionCount.scss';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

class OptionCount extends Component {
  render() {
    return (
      <li className="optionCount">
        <p className="paymentOptionTitle">수량</p>
        <div className="countWrap">
          <button className="down">
            <AiOutlineMinus />
          </button>
          <input type="button" />
          <button className="up">
            <AiOutlinePlus />
          </button>
        </div>
      </li>
    );
  }
}

export default OptionCount;
