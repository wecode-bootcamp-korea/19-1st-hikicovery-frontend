import React, { Component } from 'react';
import ProductContent from './ProductContent/ProductContent';
import ProductOption from './ProductOption/ProductOption';
import './ProductDetail.scss';

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      price: 0,
      product_stock: [],
      image: [],
      color: [],
      count: 1,
      product_info: [],
      reviewList: [],
      isSelect: false,
      season: [],
    };
  }

  componentDidMount = idx => {
    fetch('http://10.58.5.151:8000/products/5')
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.product_info[0].name,
          price: res.product_info[0].price,
          image: res.product_info[0].image,
          product_stock: res.product_info[0].product_stock,
          color: res.product_info[0].color,
          product_info: res.product_info,
          mainImage: res.product_info[0].image[0].image_url,
          subImage: res.product_info[0].image[1].image_url,
          season: res.product_info[0].season,
        });
      });
    this.product_infoDetailReviewData();
  };

  product_infoDetailReviewData = () => {
    fetch('/data/DetailReviewdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data,
        });
      });
  };

  handleClickColorList = idx => {
    const newArr = Array(this.state.color).fill(false);
    newArr[idx] = true;
    fetch(`http://10.58.5.151:8000/products/${idx}`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          product_info: res.product_info,
        });
      });
  };

  onIncreaseCountCount = () => {
    const { count } = this.state;

    if (count === 8) {
      alert('주문 최대 가능 수량은 8입니다.');
      return;
    }

    this.setState({
      count: count + 1,
    });
  };

  onDecreaseCountCount = () => {
    const { count } = this.state;

    if (count === 0) {
      alert('주문 최소 가능 수량은 1입니다.');
      return;
    }

    this.setState({
      count: count - 1,
    });
  };

  isSoldOut = () => {
    const { stock } = this.state;
    if (stock === 0) {
      this.setState({
        soldOut: true,
      });
    } else {
      this.setState({
        soldOut: false,
      });
    }
  };

  render() {
    const {
      name,
      price,
      color,
      product_stock,
      count,
      reviewList,
      product_info,
      image,
      isSelect,
      season,
    } = this.state;

    return (
      <div className="ProductDetail">
        <section className="contentProductDetail">
          <ProductContent
            reviewList={reviewList}
            image={image}
            product_info={product_info}
          />
          <ProductOption
            name={name}
            price={price}
            count={count}
            onIncreaseCount={this.onIncreaseCount}
            onDecreaseCount={this.onDecreaseCount}
            color={color}
            soldOut={this.soldOut}
            product_stock={product_stock}
            reviewList={reviewList}
            isSelect={isSelect}
            product_info={product_info}
            season={season}
            // id={id}
          />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
