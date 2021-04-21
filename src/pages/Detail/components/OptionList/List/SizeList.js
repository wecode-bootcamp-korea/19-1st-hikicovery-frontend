import React, { Component } from 'react';
import './SizeList.scss';

class SizeList extends Component {
  render() {
    const { size, stock, isSelect } = this.props;
    return (
      <li className="sizeList">
        <button
          className={`${isSelect ? 'selected' : ''} ${
            stock === 0 ? 'soldOut' : ''
          }`}
          onClick={this.selectSizeBtn}
        >
          {size}
        </button>
      </li>
    );
  }
}

export default SizeList;
