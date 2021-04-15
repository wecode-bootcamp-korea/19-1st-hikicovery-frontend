import React, { Component } from 'react';
import SizeList from './List/SizeList';
import './OptionSize.scss';

class OptionSize extends Component {
  render() {
    const { sizeList } = this.props;
    return (
      <li className="optionSize">
        <p className="paymentOptionTitle">사이즈</p>
        <ul className="paymentSizeListbox">
          {sizeList.map(element => {
            return (
              <SizeList
                key={element.id}
                size={element.size}
                sizeList={sizeList}
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
