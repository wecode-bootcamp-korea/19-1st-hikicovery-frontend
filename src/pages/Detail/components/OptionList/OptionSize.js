import React, { Component } from 'react';
import SizeList from './List/SizeList';
import './OptionSize.scss';

class OptionSize extends Component {
  render() {
    const { sizeList, stock, stockSize, soldOut } = this.props;

    return (
      <li className="optionSize">
        <p className="paymentOptionTitle">사이즈</p>
        <ul className="paymentSizeListbox">
          {sizeList.map(element => {
            return (
              <SizeList
                key={element.id}
                size={element.size}
                stockSize={stockSize}
                stock={stock}
                soldOut={soldOut}
              />
            );
          })}
        </ul>
        <p>
          <a href="/">Size Guide</a>
        </p>
      </li>
    );
  }
}

export default OptionSize;
