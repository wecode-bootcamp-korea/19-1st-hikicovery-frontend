import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import ShoesPaginateNum from './ShoesPaginateNum';
import './ShoesPaginate.scss';

const SHOW = 10;

class ShoesPaginate extends Component {
  constructor() {
    super();
    this.state = {
      PageNo: 1,
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(this.props.location.search);
  //   const query = this.props.locaiton.search;
  //   // if (prevProps !== this.props) {
  //   //   this.getProductData();
  //   // }
  // }

  getProductData = () => {
    const { PageNo } = this.state;
    fetch(`http://10.58.1.224:8000/products?PageNo=${PageNo}&Show=${SHOW}`);
  };

  clickLeft = () => {
    const { PageNo } = this.state;
    let nextPageNum = PageNo;

    if (PageNo > 1) {
      nextPageNum--;
      this.setState({ PageNo: nextPageNum });
    }
    this.props.history.push(
      `/shoes?PageNo=${Number(nextPageNum)}&Show=${SHOW}`
    );
  };

  clickRight = () => {
    const { PageNo } = this.state;
    let nextPageNum = PageNo + 1;

    if (nextPageNum > 1) {
      this.setState({ PageNo: nextPageNum });
      this.props.history.push(
        `/shoes?PageNo=${Number(nextPageNum)}&Show=${SHOW}`
      );
    }
  };

  arrowNext = () => {};

  render() {
    const { clickLeft, clickRight } = this;
    return (
      <div className="ShoesPaginate">
        <ul className="paginateUl">
          <li className="prevArrow">
            <FaAngleDoubleLeft onClick={clickLeft} />
          </li>
          {Numbers.map((el, index) => (
            <ShoesPaginateNum
              key={index}
              num={el.number}
              onClick={this.arrowNext}
            />
          ))}
          <li className="nextArrow">
            <FaAngleDoubleRight onClick={clickRight} />
          </li>
        </ul>
      </div>
    );
  }
}

const Numbers = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  {
    number: 5,
  },
  {
    number: 6,
  },
];

export default withRouter(ShoesPaginate);
