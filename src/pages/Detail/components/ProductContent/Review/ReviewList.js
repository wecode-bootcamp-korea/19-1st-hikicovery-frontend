import React, { Component } from 'react';
import './ReviewList.scss';
import { AiFillStar } from 'react-icons/ai';
import { MdPhoto } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

class ReviewList extends Component {
  render() {
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
            <p className="reviewScore">5점</p>
            <p className="reviewProduct">(컬러 : WHITE / 사이즈 : 240)</p>
            <MdPhoto className="imgIcon" />
          </li>
          <li>
            <p className="reviewId">jsn01**</p>
            <p className="reviewDate">2021-04-14</p>
          </li>
        </ul>
        <div className="reviewInnerBottom">
          <ul className="bottomBox">
            <li>
              <p>생각한 제품이랑 거의 동일하네요 화면이랑 비슷해요!</p>
            </li>
            <li>
              <AiOutlinePlus />
            </li>
          </ul>
          <div className="reviewDetail">
            <ul className="reviewDetailInner">
              <li className="reviewTitle">사이즈</li>
              <li className="reviewText">딱 맞아요</li>
              <li className="reviewTitle">컬러</li>
              <li className="reviewText">색상과 같아요</li>
            </ul>
            <div className="reviewImg">
              <img
                src="https://static.discovery-expedition.com/images/goods/review/20210414/44668606482151732.jpg"
                alt="후기사진"
              />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ReviewList;
