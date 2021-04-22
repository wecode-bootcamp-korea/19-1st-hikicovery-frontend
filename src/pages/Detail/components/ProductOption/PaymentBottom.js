import React, { Component } from 'react';
import './PaymentBottom.scss';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';

class PaymentBottom extends Component {
  constructor() {
    super();
    this.state = {
      heartCount: 0,
      liked: false,
    };
  }

  onChangeCount = e => {
    this.setState({
      heartCount: e.target.product_info.heartCount + 1,
    });
  };

  toggleHeart = () => {
    const { liked } = this.state;
    this.setState({
      liked: !liked,
    });
  };

  render() {
    const { liked, heartCount } = this.state;
    return (
      <ul className="paymentBottom">
        <li>
          <a href="/">상품 리뷰(341)</a>
        </li>
        <li className="iconBox">
          <button className="share">
            <MdShare />
          </button>
          <button className="heart" onClick={this.toggleHeart}>
            {liked ? (
              <FaHeart className="heartFillIcon" />
            ) : (
              <FaRegHeart className="heartIcon" />
            )}
          </button>
          <p className="heartCount" onChange={this.onChangeCount}>
            {liked ? heartCount + 1 : heartCount}
          </p>
        </li>
      </ul>
    );
  }
}

export default PaymentBottom;
