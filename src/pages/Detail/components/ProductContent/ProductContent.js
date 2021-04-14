import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductReview from './ProductReview';
import './ProductContent.scss';

class ProductContent extends Component {
  render() {
    return (
      <div className="productContent">
        <ProductImage />
        <ul className="contentMenu">
          <li className="active">
            <a href="/">상품 리뷰</a>
          </li>
          <li>
            <a href="/">상품 고시정보</a>
          </li>
          <li>
            <a href="/">배송/반품/교환정보</a>
          </li>
        </ul>
        <div className="productTabmenu" id="tabmenu1">
          <h3>상품리뷰</h3>
          <p className="bold">
            상품을 구매하신 고객님의 리뷰가 총 24개 있습니다.
          </p>
          <p>
            리뷰 작성시 온라인몰에서 사용 가능한 포인트를 적립해 드립니다.
            (텍스트 리뷰 300포인트, 포토리뷰 1,000 포인트)
          </p>
        </div>
        <div className="productTabmenu" id="tabmenu1">
          상품 고시정보
        </div>
        <div className="productTabmenu" id="tabmenu1">
          배송 반품 교환 정보 입니다.
        </div>
        <ProductReview />
      </div>
    );
  }
}

export default ProductContent;
