import React, { Component } from 'react';
import './ShoesPaginateNum.scss';

class ShoesPaginateNum extends Component {
  render() {
    return (
      <div className="ShoesPaginateNum">
        <li className="paginateNumLi">{this.props.num}</li>
      </div>
    );
  }
}

export default ShoesPaginateNum;
