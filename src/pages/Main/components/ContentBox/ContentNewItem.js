import React, { Component } from 'react';
import './ContentNewItem.scss';

class ContentNewItem extends Component {
  render() {
    const { image, title, text, price, goToProductDetail } = this.props;
    return (
      <div className="contentNewItem">
        <li className="contentItem">
          <div className="contentImgBox">
            <img src={image} onClick={goToProductDetail} alt="컨텐츠사진" />
          </div>
          <h3 className="itemName">{title}</h3>
          <p className="itemPrice">{price}</p>
          <p className="itemText">{text}</p>
        </li>
      </div>
    );
  }
}

export default ContentNewItem;
