import React, { Component } from 'react';
import './OptionCount.scss';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

class OptionCount extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      LikeButtonColor: 1,
    };
  }
  onIncrease = () => {
    console.log('증가');
    this.setState({
      count: this.state.count + 1,
    });
    if (this.state.count > 7) {
      alert('주문 가능한 최소 수량은 8 입니다.');
    }
  };

  onDecrease = () => {
    this.setState({
      count: this.state.count - 1,
    });
    if (this.state.count < 1) {
      alert('주문 가능한 최소 수량은 1 입니다.');
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
