import React, { Component } from 'react';
import './ColorList.scss';

class ColorList extends Component {
  render() {
    const { image, handleClickColorList, id, select } = this.props;
    return (
      <div className="colorList">
        <li
          className={select ? 'paymentColorList selected' : 'paymentColorList'}
          onClick={() => {
            handleClickColorList(id);
          }}
        >
          <img src={image} alt="색상별 제품사진" />
        </li>
      </div>
    );
  }
}

export default ColorList;
