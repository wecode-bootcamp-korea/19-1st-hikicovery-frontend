import React, { Component } from 'react';
import './ContentItem.scss';

class ContentItem extends Component {
  render() {
    const { image, title, text, goToProductList } = this.props;
    return (
      <div className="conten">
        <li className="contentItem">
          <div className="contentImgBox">
            <img src={image} alt="컨텐츠사진" onClick={goToProductList} />
          </div>
          <h3 className="itemName">{title}</h3>
          <p className="itemText">{text}</p>
        </li>
      </div>
    );
  }
}

export default ContentItem;
