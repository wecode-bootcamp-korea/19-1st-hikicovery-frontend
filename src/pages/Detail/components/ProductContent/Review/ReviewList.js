import React, { Component } from 'react';
import { AiFillStar, AiOutlinePlus } from 'react-icons/ai';
import { MdPhoto } from 'react-icons/md';
import './ReviewList.scss';

class ReviewList extends Component {
  constructor() {
    super();
    this.state = {
      show: true,
    };
  }

  clickPlusBtn = () => {
    const { show } = this.state;
    this.setState({
      show: !show,
    });
  };

  render() {
    const { show } = this.state;
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
            <p className="reviewScore">{this.props.score}점</p>
            <p className="reviewProduct">
              (컬러 : {this.props.color} / 사이즈 : {this.props.size})
            </p>
            <MdPhoto className="imgIcon" />
          </li>
          <li>
            <p className="reviewId">{this.props.userId}</p>
            <p className="reviewDate">{this.props.date}</p>
          </li>
        </ul>
        <div className="reviewInnerBottom">
          <ul className="bottomBox">
            <li>
              <p>{this.props.text}</p>
            </li>
            <li>
              <AiOutlinePlus onClick={this.clickPlusBtn} />
            </li>
          </ul>
          <div className={show ? 'reviewDetail hide' : 'reviewDetail'}>
            <ul className="reviewDetailInner">
              <li className="reviewTitle">사이즈</li>
              <li className="reviewText">{this.props.sizetext}</li>
              <li className="reviewTitle">컬러</li>
              <li className="reviewText">{this.props.colortext}</li>
            </ul>
            <div className="reviewImg">
              <img src={this.props.image} alt="후기사진" />
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ReviewList;
