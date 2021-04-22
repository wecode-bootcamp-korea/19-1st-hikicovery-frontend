import React, { Component } from 'react';

class Promotion extends Component {
  render() {
    const { image, title, text, price, goToSignUp } = this.props;
    return (
      <div className="promotion">
        <li class="contentItem">
          <div class="contentImgBox">
            <img src={image} alt="컨텐츠사진" onClick={goToSignUp} />
          </div>
          <h3 class="itemName">{title}</h3>
          <p class="itemPrice">{price}</p>
          <p class="itemText">{text}</p>
        </li>
      </div>
    );
  }
}

export default Promotion;
