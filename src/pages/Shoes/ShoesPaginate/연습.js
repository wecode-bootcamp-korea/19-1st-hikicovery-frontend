import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import ShoesPaginateNum from './ShoesPaginateNum';
import './ShoesPaginate.scss';

class ShoesPaginate extends Component {
  constructor() {
    super();
    this.state = {
      PageNo: 1,
    };
  }

  componentDidMount() {}

  getFetchData = () => {
    fetch(`http://10.58.5.151:8000/products?PageNo=${PageNO}&Show=${10}`);
  };

  leftArrow = () => {
    this.setState({ PageNo: PageNo - 1 });
    fetch(`/shoes?PageNo=${Numbers(this.state.PageNo) - 1}&Show=${10}`);
  };

  render() {
    return (
      <div className="ShoesPaginate">
        <ul className="paginateUl">
          <li className="lfArrow" onClick={}>
            <FaAngleDoubleLeft />
          </li>
          {Numbers.map((Numbers, index) => {
            <ShoesPaginateNum key={index} number={Numbers.number} />;
          })}

          <li className="rtArrow">
            <FaAngleDoubleRight />
          </li>
        </ul>
      </div>
    );
  }
}

const Numbers = [
  { number: 1 },
  { number: 2 },
  { number: 3 },
  { number: 4 },
  { number: 5 },
  { number: 6 },
];

export default withRouter(ShoesPaginate);
