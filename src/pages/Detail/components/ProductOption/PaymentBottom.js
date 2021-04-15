import React, { Component } from 'react';
import './PaymentBottom.scss';
import { FaRegHeart, FaHeart } from 'react-icons/fa';
import { MdShare } from 'react-icons/md';

class PaymentBottom extends Component {
  constructor() {
    super();
    this.state = {
      heartCount: 0,
      Liked: false,
    };
  }

  onChangeCount = e => {
    this.setState({
      heartCount: e.target.heartCount + 1,
    });
  };

  toggleHeart = () => {
    const { Liked } = this.state;
    this.setState({
      Liked: !Liked,
    });
  };
  render() {
    const { Liked, heartCount } = this.state;
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
            {Liked ? (
              <FaHeart className="heartFillIcon" />
            ) : (
              <FaRegHeart className="heartIcon" />
            )}
          </button>
          <p className="heartCount" onChange={this.onChangeCount}>
            {Liked ? heartCount + 1 : heartCount}
          </p>
        </li>
      </ul>
    );
  }
}

export default PaymentBottom;
