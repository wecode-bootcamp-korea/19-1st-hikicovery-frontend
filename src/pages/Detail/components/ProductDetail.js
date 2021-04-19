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
      reviewList: [],
    };
  }

  onIncrease = () => {
    const { count } = this.state;
    if (count < 8) {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      alert('주문 최대 가능 수량은 1입니다.');
    }
  };

  onDecrease = () => {
    const { count } = this.state;
    if (count <= 1) {
      alert('주문 최소 가능 수량은 1입니다.');
    } else {
      this.setState({
        count: count - 1,
      });
    }
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

  componentDidMount() {
    fetch('http://172.30.1.35:8000/products/goods/7', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.product_info[0].name,
          price: res.product_info[0].price,
          image: res.product_info[0].image[0].image_url,
          product_stock: res.product_info[0].product_stock,
          color: res.product_info[0].color,
        });
        console.log(res.product_info[0].color);
      });

    // fetch('/data/DetailColordata.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       colorList: data,
    //     });
    //   });

    // fetch('/data/DetailSizedata.json')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       sizeList: data,
    //     });
    //   });

    fetch('/data/DetailReviewdata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          reviewList: data,
        });
      });
  }

  render() {
    const {
      name,
      price,
      image,
      count,
      product_stock,
      color,
      reviewList,
    } = this.state;
    return (
      <div className="ProductDetail">
        <section className="contentProductDetail">
          <ProductContent image={image} reviewList={reviewList} />
          <ProductOption
            name={name}
            price={price}
            count={count}
            onIncrease={this.onIncrease}
            onDecrease={this.onDecrease}
            color={color}
            soldOut={this.soldOut}
            product_stock={product_stock}
            reviewList={reviewList}
          />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
