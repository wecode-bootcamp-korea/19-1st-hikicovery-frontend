import React, { Component } from "react";
import ReviewList from "./Review/ReviewList";
import "./ProductReview.scss";

class ProductReview extends Component {
  state = {
    options: [
      {
        name: "댓글보기",
        value: null,
      },
      {
        name: "최근등록순",
        value: "최근등록순",
      },
      {
        name: "최고평점순",
        value: "최고평점순",
      },
      {
        name: "최저평점순",
        value: "최저평점순",
      },
    ],
  };

  render() {
    const { reviewList, handleChange } = this.props;
    const { options } = this.state;
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
            <select onChange={handleChange}>
              {options.map((item, index) => (
                <option key={index} name={item.name} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <ul className="review">
          {reviewList.map((element) => {
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
