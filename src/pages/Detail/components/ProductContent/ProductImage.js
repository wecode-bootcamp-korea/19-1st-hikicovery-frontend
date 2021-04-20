import React, { Component } from 'react';
import './ProductImage.scss';

class ProductImage extends Component {
  render() {
    const { image } = this.props;
    const mainImage = image.slice(0, 1);
    const subImage = image.slice(1);
    return (
      <div>
        <div className="productImage">
          <img src={mainImage[0].image_url} alt="제품사진" />
        </div>
        <ul className="contentDetailMenu">
          <li className="active">
            <a href="#tabmenu1">상품 리뷰</a>
          </li>
        </ul>
        <div className="detailInfo">
          <h3>상품 상세정보</h3>
          <p className="bold">
            상품에 대한 자세한 정보가 여기있습니다 상품 상세정보에 대해 자세히
            알아보세요.
          </p>
        </div>
        {subImage.map(element => {
          return (
            <div className="productDetailImage">
              <img src={element.image_url} alt="상세페이지 이미지"></img>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ProductImage;
