import React, { Component } from 'react';
import './ShoesPaginateNum.scss';

class ShoesPaginateNum extends Component {
  render() {
    return (
      <div className="ShoesPaginateNum">
        <li
          className="paginateNumLi"
          onClick={() => this.props.fetchShoes(this.props.num)}
        >
          {this.props.num}
        </li>
      </div>
    );
  }
}

export default ShoesPaginateNum;
