import React, { Component } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './OptionCount.scss';

class OptionCount extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      LikeButtonColor: 1,
    };
  }
  onIncrease = () => {
    const { count } = this.state;
    if (count < 8) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      alert('주문 최대 가능 수량은 1입니다.');
    }
  };

  onDecrease = () => {
    const { count } = this.state;
    if (count < 1) {
      this.setState({
        count: this.state.count + -1,
      });
    } else {
      alert('주문 최소 가능 수량은 1입니다.');
    }
  };

  render() {
    const { count } = this.state;
    return (
      <li className="optionCount">
        <p className="paymentOptionTitle">수량</p>
        <div className="countWrap">
          <button className="down" onClick={this.onDecrease}>
            <AiOutlineMinus />
          </button>
          <input type="button" value={count} />
          <button className="up" onClick={this.onIncrease}>
            <AiOutlinePlus />
          </button>
        </div>
      </li>
    );
  }
}

export default OptionCount;
