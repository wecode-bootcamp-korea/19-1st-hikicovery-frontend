import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaPlus, FaMinus, FaTimes } from 'react-icons/fa';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import FixMenuBar from '../../components/FixMenuBar/FixMenuBar';
import './Basket.scss';

class Basket extends Component {
  state = {
    basketData: [],
  };

  changeQuantity = (num, index) => {
    const { basketData } = this.state;
    const array = [...basketData];
    array[index].quantity = array[index].quantity + num;
    this.setState(array);
  };

  handleQuantity = (e, index) => {
    const { value } = e.target;
    const { basketData } = this.state;
    const array = [...basketData];
    array[index].quantity = value * 1;
    this.setState(array);
  };

  delProduct = id => {
    const { basketData } = this.state;
    const filterData = basketData.filter(product => {
      return product.id !== id;
    });
    this.setState({
      ...basketData,
      basketData: filterData,
    });
  };

  componentDidMount() {
    fetch('http://10.58.6.166:8000/cart')
      .then(res => res.json())
      .then(data => {
        this.setState({
          basketData: data.MESSAGE,
        });
      });
  }

  render() {
    const { basketData } = this.state;
    const { changeQuantity, handleQuantity, delProduct } = this;
    return (
      <>
        <Nav />
        <FixMenuBar />
        <section className="basketCotainer">
          <article className="basketContents">
            <ul className="buyStepBox">
              <li className="buyStep">장바구니</li>
              <li className="buyStep">주문/결제</li>
              <li className="buyStep">주문완료</li>
            </ul>
            <ul className="orderWayBox">
              <li className="orderWay">일반주문(1)</li>
              <li className="orderWay">예약주문(0)</li>
              <li className="orderWay">매장픽업(0)</li>
            </ul>
            <div className="orderWrap">
              <div className="orderLeft">
                <div className="dltProductBtnBox">
                  <button className="dltProductBtn">선택상품삭제</button>
                </div>
                <div className="orderContents">
                  <div className="orderMenuTitle">
                    <div className="productChkBtnBox">
                      <input className="productChkBtn" type="checkbox" />
                    </div>
                    <span className="product">상품</span>
                    <span className="quantity">수량</span>
                    <span className="discount">할인/혜택</span>
                    <span className="delivery">배송정보</span>
                    <span className="payment">주문금액</span>
                    <span className="delete">삭제</span>
                  </div>
                  <div className="productList">
                    {basketData.map((product, index) => {
                      const {
                        image,
                        size,
                        price,
                        quantity,
                        id,
                        name,
                      } = product;
                      return (
                        <div className="orderMenu ">
                          <div className="productChkBtnBox">
                            <input className="productChkBtn" type="checkbox" />
                          </div>
                          <div className="product">
                            <div className="productImgBox">
                              <img src={image} alt="상품 장바구니 이미지" />
                            </div>
                            <div className="productInfoBox">
                              <div className="productName">
                                <p>{name}</p>
                                <p>{`${price.toLocaleString()}원`}</p>
                              </div>
                              <p>
                                OW / {size}
                                <Link to="/basket">변경</Link>
                              </p>
                            </div>
                          </div>
                          <div className="quantity">
                            <div className="quntityBtnBox">
                              <button onClick={() => changeQuantity(-1, index)}>
                                <FaMinus />
                              </button>
                              <input
                                className="quantityCnt"
                                maxLength="2"
                                type="number"
                                value={quantity}
                                onChange={e => handleQuantity(e, index)}
                              />
                              <button onClick={() => changeQuantity(1, index)}>
                                <FaPlus />
                              </button>
                            </div>
                            <span>적용</span>
                          </div>
                          <div className="discount">
                            <div>
                              <span>사은품제공</span>
                            </div>
                          </div>
                          <div className="delivery deliveryItem">
                            <p>무료</p>
                          </div>
                          <div className="payment">
                            <p className="price">{`${(
                              price * quantity
                            ).toLocaleString()}원`}</p>
                          </div>
                          <div className="delete">
                            <button
                              className="delProductBtn"
                              onClick={() => delProduct(id)}
                            >
                              <FaTimes />
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="orderRight">asdf</div>
            </div>
          </article>
        </section>
        <Footer />
      </>
    );
  }
}

export default Basket;
