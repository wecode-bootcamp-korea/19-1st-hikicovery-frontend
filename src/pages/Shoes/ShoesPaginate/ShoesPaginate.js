import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import ShoesPaginateNum from './ShoesPaginateNum';
import './ShoesPaginate.scss';

const SHOW = 12;

class ShoesPaginate extends Component {
  constructor() {
    super();
    this.state = {
      PageNo: 1,
      PageNoMax: 1,
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
  //

  getProductData = () => {
    const { PageNo } = this.state;
    fetch(`http://10.58.1.224:8000/products?PageNo=${PageNo}&Show=${SHOW}`)
      .then(res => res.json())
      .then(data =>
        this.setState({
          PageNoMax: data.max_page,
        })
      );
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

  fetchShoes = number => {
    this.setState({ PageNo: number });
    this.props.history.push(`/shoes?PageNo=${number}&Show=${SHOW}`);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`http://10.58.1.224:8000/products${this.props.location.search}`)
        .then(res => res.json())
        .then(data =>
          this.setState({
            PageNoMax: data.max_page,
          })
        );
    }
  }

  render() {
    const PageNoNum = [...Array(Number(this.state.PageNoMax)).keys()];

    const { clickLeft, clickRight } = this;
    return (
      <div className="ShoesPaginate">
        <ul className="paginateUl">
          <li className="prevArrow">
            <FaAngleDoubleLeft onClick={clickLeft} />
          </li>
          {PageNoNum.map((num, index) => (
            <ShoesPaginateNum
              key={index}
              num={num + 1}
              fetchShoes={this.fetchShoes}
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

export default withRouter(ShoesPaginate);
