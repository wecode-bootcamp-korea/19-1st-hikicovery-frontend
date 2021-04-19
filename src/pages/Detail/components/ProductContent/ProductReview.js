import React, { Component } from 'react';
import ReviewList from './Review/ReviewList';
import './ProductReview.scss';

class ProductReview extends Component {
  // updateSort = () => {
  //   const { reviewList } = this.props;
  //   reviewList.filter(element => {
  //     return element.score.sort(function (a, b) {
  //       return b - a;
  //     });
  //   });
  // };

  render() {
    const { reviewList } = this.props;
    return (
      <div className="productReview">
        <div className="reviewWrap">
          <ul className="reviewTabMenu">
            <li>
              전체<span className="red">(42)</span>
            </li>
            <li>
              포토리뷰<span className="red">(2)</span>
            </li>
            <li>
              일반리뷰<span className="red">(40)</span>
            </li>
          </ul>
          <div className="filter">
            <select name="최근등록순">
              <option value="HTML">최근등록순</option>
              <option value="자바스크립트">최고평점순</option>
              <option value="CSS">최저평점순</option>
            </select>
          </div>
        </div>
        <ul className="review">
          {reviewList.map(element => {
            return (
              <ReviewList
                key={element.id}
                score={element.score}
                userId={element.userId}
                color={element.color}
                size={element.size}
                date={element.date}
                text={element.text}
                sizetext={element.sizetext}
                colortext={element.colortext}
                image={element.image}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductReview;
