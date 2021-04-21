import React, { Component } from 'react';
import './ContentItem.scss';

class ContentItem extends Component {
  render() {
    const { image, title, text } = this.props;
    return (
      <div className="conten">
        <li class="contentItem">
          <div class="contentImgBox">
            <img src={image} alt="컨텐츠사진" />
          </div>
          <h3 class="itemName">{title}</h3>
          <p class="itemText">{text}</p>
        </li>
      </div>
    );
  }
}

export default ContentItem;
