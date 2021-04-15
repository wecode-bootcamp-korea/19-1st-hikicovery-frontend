import React, { Component } from 'react';
import ReviewList from './Review/ReviewList';
import './ProductReview.scss';

class ProductReview extends Component {
  constructor() {
    super();
    this.state = {
      reviewList: [],
    };
  }

  componentDidMount() {
    fetch('/data/DetailReviewdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data,
        });
      });
  }

  render() {
    const { reviewList } = this.state;
    return (
      <div class="productReview">
        <div class="reviewWrap">
          <ul class="reviewTabMenu">
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
            const {
              id,
              score,
              userId,
              color,
              size,
              date,
              text,
              sizetext,
              colortext,
              image,
            } = element;
            return (
              <ReviewList
                key={id}
                score={score}
                userId={userId}
                color={color}
                size={size}
                date={date}
                text={text}
                sizetext={sizetext}
                colortext={colortext}
                image={image}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ProductReview;
