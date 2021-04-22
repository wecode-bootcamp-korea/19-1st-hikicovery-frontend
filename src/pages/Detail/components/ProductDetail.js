import React, { Component } from "react";
import { GET_PRODUCT_API } from "../config/config";
import ProductContent from "./ProductContent/ProductContent";
import ProductOption from "./ProductOption/ProductOption";
import "./ProductDetail.scss";

class ProductDetail extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      price: 0,
      productStock: [],
      image: [],
      color: [],
      count: 1,
      productInfo: [],
      reviewList: [],
      isSelect: false,
      season: [],
    };
  }

  componentDidMount = (idx) => {
    fetch(`${GET_PRODUCT_API}/7`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          name: res.product_info[0].name,
          price: res.product_info[0].price,
          image: res.product_info[0].image,
          productStock: res.product_info[0].product_stock,
          color: res.product_info[0].color,
          productInfo: res.product_info,
          season: res.product_info[0].season,
        });
      });
    this.productInfoDetailReviewData();
  };

  productInfoDetailReviewData = () => {
    fetch("/data/DetailReviewdata.json")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          reviewList: data,
        });
      });
  };

  handleClickColorList = (idx) => {
    const newArr = Array(this.state.color).fill(false);
    newArr[idx] = true;
    fetch(`http://10.58.1.224:8000/products/${idx}`)
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          productInfo: res.product_info,
        });
      });
  };

  onIncreaseCount = () => {
    const { count } = this.state;

    if (count === 8) {
      alert("주문 최대 가능 수량은 8입니다.");
      return;
    }

    this.setState({
      count: count + 1,
    });
  };

  onDecreaseCount = () => {
    const { count } = this.state;

    if (count === 1) {
      alert("주문 최소 가능 수량은 1입니다.");
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
        soldOut: stock === 0,
      });
    }
  };

  handleChange = (event) => {
    const value = event.target.value;
    const { reviewList } = this.state;

    if (value === "최근등록순") {
      this.setState({
        reviewList: reviewList.sort((a, b) => {
          return a.date - b.date;
        }),
      });
    }

    if (value === "최고평점순") {
      this.setState({
        reviewList: reviewList.sort((a, b) => {
          return a.score > b.score ? -1 : a.score < b.score ? 1 : 0;
        }),
      });
    }

    if (value === "최저평점순") {
      this.setState({
        reviewList: reviewList.sort((a, b) => {
          return a.score < b.score ? -1 : a.score > b.score ? 1 : 0;
        }),
      });
    }
  };

  render() {
    const {
      name,
      price,
      color,
      productStock,
      count,
      reviewList,
      productInfo,
      image,
      isSelect,
      season,
    } = this.state;

    const {
      handleChange,
      onIncreaseCount,
      onDecreaseCount,
      handleClickColorList,
      soldOut,
    } = this;
    return (
      <div className="productDetail">
        <section className="contentProductDetail">
          <ProductContent
            reviewList={reviewList}
            image={image}
            productInfo={productInfo}
            handleChange={handleChange}
          />
          <ProductOption
            name={name}
            price={price}
            count={count}
            onIncreaseCount={onIncreaseCount}
            onDecreaseCount={onDecreaseCount}
            handleClickColorList={handleClickColorList}
            color={color}
            soldOut={soldOut}
            productStock={productStock}
            reviewList={reviewList}
            isSelect={isSelect}
            productInfo={productInfo}
            season={season}
          />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
