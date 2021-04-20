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
      get: [],
      reviewList: [],
      isSelect: false,
      season: [],
    };
  }

  handleClickColorList = idx => {
    fetch(`http://10.58.5.151:8000/products/${idx}`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          get: res.product_info,
          isSelect: true,
        });
      });
  };

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

  handleClickUpdateDate = () => {
    const { reviewList } = this.state;
    this.setState({
      reviewList: reviewList.sort(function (a, b) {
        return a - b;
      }),
    });
  };

  handleClickAll = () => {
    const { reviewList } = this.state;
    this.setState({
      reviewList: reviewList.sort(function (a, b) {
        return a - b;
      }),
    });
  };

  handleClickScoreUp = () => {
    console.log('카운트 업');
    const { reviewList } = this.state;
    this.setState({
      reviewList: reviewList.sort(function (a, b) {
        return a - b;
      }),
    });
  };

  //fetch(`http://172.30.1.35:8000/products/goods/${this.state.id}`

  componentDidMount = idx => {
    fetch('http://10.58.5.151:8000/products/5', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.product_info[0].name,
          price: res.product_info[0].price,
          image: res.product_info[0].image,
          product_stock: res.product_info[0].product_stock,
          color: res.product_info[0].color,
          isSelect: res.product_info,
          get: res.product_info,
          season: [res.product_info[0].season],
        });
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
          reviewdate: data.date,
        });
      });
  };

  render() {
    const {
      name,
      price,
      color,
      product_stock,
      count,
      reviewList,
      get,
      image,
      isSelect,
      season,
    } = this.state;
    return (
      <div className="ProductDetail">
        <section className="contentProductDetail">
          <ProductContent
            get={get}
            image={image}
            reviewList={reviewList}
            handleClickScoreUp={this.handleClickScoreUp}
          />
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
            isSelect={isSelect}
            handleClickColorList={this.handleClickColorList}
            get={get}
            season={season}
            // id={id}
          />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
