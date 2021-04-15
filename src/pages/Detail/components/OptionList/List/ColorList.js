import React, { Component } from 'react';
import './ColorList.scss';

class ColorList extends Component {
  render() {
    const { images } = this.props;
    return (
      <div className="colorList">
        <li className="paymentColorList">
          <a href="/">
            <img src={images} alt="색상별 제품사진" />
          </a>
        </li>
      </div>
    );
  }
}

export default ColorList;
