import React, { Component } from 'react';
import './ContentNewItem.scss';

class ContentNewItem extends Component {
  render() {
    const { image, title, text, price, goToProductDetail } = this.props;
    return (
      <div className="contentNewItem">
        <li class="contentItem">
          <div class="contentImgBox">
            <img src={image} onClick={goToProductDetail} alt="컨텐츠사진" />
          </div>
          <h3 class="itemName">{title}</h3>
          <p class="itemPrice">{price}</p>
          <p class="itemText">{text}</p>
        </li>
      </div>
    );
  }
}

export default ContentNewItem;
