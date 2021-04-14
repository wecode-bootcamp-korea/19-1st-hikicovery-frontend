import React, { Component } from 'react';
import './ProductReview.scss';

class ProductReview extends Component {
  render() {
    return (
      <div class="productReview">
        <div class="reviewWrap">
          <ul class="reviewTabMenu">
            <li>전체(42)</li>
            <li>포토리뷰(2)</li>
            <li>일반리뷰(40)</li>
          </ul>
          <div className="filter">
            <select name="최근등록순">
              <option value="HTML">최근등록순</option>
              <option value="자바스크립트">최고평점순</option>
              <option value="CSS">최저평점순</option>
            </select>
          </div>
        </div>
        <ul>
          <li>
            <ul>
              <li>
                왼쪽영역
                <div class="reviewStar">별아이콘</div>
                <p class="reviewScore">5점</p>
                <p class="reviewProduct">(컬러 : WHITE / 사이즈 : 240)</p>
                아이콘
              </li>
              <li>
                <p class="reviewId">jsn01**</p>
                <p class="reviewdate">2021-04-14</p>
              </li>
            </ul>
            <ul>
              <li>
                <p>생각한 제품이랑 거의 동일하네요 화면이랑 비슷해요!</p>
              </li>
              <li>펼치기</li>
            </ul>
            <div class="reviewDetail">
              <p>사이즈</p>
              <span>딱 맞아요</span>
              <p>컬러</p>
              <span>화면과 같아요</span>
              <div class="reviewImg">
                {/* <img
                  src="https://static.discovery-expedition.com/images/goods/review/20210414/44668606482151732.jpg"
                  alt="후기사진"
                /> */}
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default ProductReview;
