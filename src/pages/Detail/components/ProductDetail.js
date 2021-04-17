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
      stock: [],
      image: [],
      soldOut: false,
      colorList: [],
      sizeList: [],
      count: 1,
      select: false,
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
    fetch('http://10.58.0.206:8000/products/goods/1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          name: res.product_info[0].name,
          price: res.product_info[0].price,
          image: res.product_info[0].image[0].image_url,
          imageName: res.product_info[0].image[0].name,
          stock: res.product_info[0].stock[0].stock,
          stockSize: res.product_info[0].stock[0].size,
        });
        console.log(res.product_info[0].image);
      });

    fetch('/data/DetailColordata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          colorList: data,
        });
      });

    fetch('/data/DetailSizedata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          sizeList: data,
        });
      });
  }

  render() {
    const {
      name,
      price,
      stock,
      image,
      stockSize,
      count,
      sizeList,
      colorList,
      select,
    } = this.state;
    return (
      <div className="ProductDetail">
        <section className="contentProductDetail">
          <ProductContent image={image} />
          <ProductOption
            name={name}
            price={price}
            stock={stock}
            stockSize={stockSize}
            count={count}
            onIncrease={this.onIncrease}
            onDecrease={this.onDecrease}
            colorList={colorList}
            sizeList={sizeList}
            select={select}
            soldOut={this.soldOut}
            selectSizeBtn={this.selectSizeBtn}
            selectColorBtn={this.selectColorBtn}
          />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
