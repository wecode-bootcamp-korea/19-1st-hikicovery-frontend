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
      color_img: '',
    };
  }

  handleClickColorList = idx => {
    // const newArr = Array(this.state.isSelected.length).fill(false);
    // newArr[idx] = true;
    fetch(`http://10.58.1.213:8000/products/goods/${idx}`, {
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

  //fetch(`http://172.30.1.35:8000/products/goods/${this.state.id}`

  componentDidMount() {
    fetch('http://10.58.1.213:8000/products/goods/1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.product_info[0].name,
          price: res.product_info[0].price,
          image: res.product_info[0].image[0].image_url,
          product_stock: res.product_info[0].product_stock,
          color_img: res.product_info[0].color[0].product_image,
          color: res.product_info[0].color,
          isSelect: res.product_info,
          get: res.product_info,
          season: [res.product_info[0].season],
        });
        console.log(res.product_info[0].color[0].product_image);
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
      color,
      product_stock,
      count,
      reviewList,
      get,
      image,
      isSelect,
      season,
      color_img,
    } = this.state;
    return (
      <div className="ProductDetail">
        <section className="contentProductDetail">
          <ProductContent get={get} image={image} reviewList={reviewList} />
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
            isSelected={isSelect}
            handleClickColorList={this.handleClickColorList}
            get={get}
            season={season}
            color_img={color_img}
            // id={id}
          />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
