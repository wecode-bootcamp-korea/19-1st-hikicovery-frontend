import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductReview from './ProductReview';
import './ProductContent.scss';

class ProductContent extends Component {
  render() {
    const { reviewList, get } = this.props;
    return (
      <div className="productContent">
        {get.map(element => {
          return <ProductImage image={element.image} />;
        })}
        <ul className="contentMenu">
          <li className="active">
            <a href="#tabmenu1">상품 리뷰</a>
          </li>
          <li>
            <a href="#tabmenu2">상품 고시정보</a>
          </li>
          <li>
            <a href="#tabmenu3">배송/반품/교환정보</a>
          </li>
        </ul>
        <div className="productTabmenu tabmenu1" id="tabmenu1">
          <h3>상품리뷰</h3>
          <p className="bold">
            상품을 구매하신 고객님의 리뷰가 총 24개 있습니다.
          </p>
          <p>
            리뷰 작성시 온라인몰에서 사용 가능한 포인트를 적립해 드립니다.
            (텍스트 리뷰 300포인트, 포토리뷰 1,000 포인트)
          </p>
          <ProductReview reviewList={reviewList} />
        </div>
        <div className="productTabmenu" id="tabmenu2">
          <h3>상품 고시정보</h3>
          <p className="bold">
            상품에 대한 자세한 정보가 여기있습니다 상품 고시정보에 대해 자세히
            알아보세요.
          </p>
        </div>
        <div className="productTabmenu" id="tabmenu3">
          <h3>배송/반품/교환정보</h3>
          <p className="bold">
            배송 반품 교환정보에 대한 자세한 내용을 알아보려면 이쪽에서
            확인해주세요
          </p>
        </div>
      </div>
    );
  }
}

export default ProductContent;
