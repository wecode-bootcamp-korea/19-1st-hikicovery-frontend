import React, { Component } from 'react';
import './ReviewList.scss';
import { AiFillStar } from 'react-icons/ai';
import { MdPhoto } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

class ReviewList extends Component {
  render() {
    const {
      score,
      userId,
      color,
      size,
      date,
      text,
      sizetext,
      colortext,
      image,
    } = this.props;
    return (
      <li className="reviewList">
        <ul className="reviewInnerTop">
          <li>
            <div className="reviewStar">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
            <p className="reviewScore">{score}점</p>
            <p className="reviewProduct">
              (컬러 : {color} / 사이즈 : {size})
            </p>
            <MdPhoto className="imgIcon" />
          </li>
          <li>
            <p className="reviewId">{userId}</p>
            <p className="reviewDate">{date}</p>
          </li>
        </ul>
        <div className="reviewInnerBottom">
          <ul className="bottomBox">
            <li>
              <p>{text}</p>
            </li>
            <li>
              <AiOutlinePlus />
            </li>
          </ul>
          <div className="reviewDetail">
            <ul className="reviewDetailInner">
              <li className="reviewTitle">사이즈</li>
              <li className="reviewText">{sizetext}</li>
              <li className="reviewTitle">컬러</li>
              <li className="reviewText">{colortext}</li>
            </ul>
            <div className="reviewImg">
              <img src={image} alt="후기사진" />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ReviewList;
