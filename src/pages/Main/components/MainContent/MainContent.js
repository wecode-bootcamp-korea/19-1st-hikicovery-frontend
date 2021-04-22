import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ContentItem from '../ContentBox/ContentItem';
import ContentNewItem from '../ContentBox/ContentNewItem';
import Promotion from '../ContentBox/Promotion';
import './MainContent.scss';

class MainContent extends Component {
  constructor() {
    super();
    this.state = {
      mainData: [],
      productList: [],
      bestItem: [],
      promotion: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.224:8000/products?ordering=-release_at&Show=1')
      .then(res => res.json())
      .then(res => {
        this.setState({
          productList: res.product_list,
        });
      });

    fetch(
      `http://10.58.1.224:8000/products?category=1&ordering=-productsale__product_sales&Show=1`
    )
      .then(res => res.json())
      .then(res => {
        this.setState({
          bestItem: res.product_list,
          num: res.product_list,
        });
      });

    fetch('/data/maindata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainData: data,
        });
        // console.log(data);
      });

    fetch('/data/promotiondata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          promotion: data,
        });
      });
  }

  goToSignUp = () => {
    console.log('클릭됨');
    this.props.history.push('/signup');
  };

  goToProductList = () => {
    console.log('클릭됨');
    this.props.history.push('/shoes');
  };

  goToProductDetail = () => {
    console.log('클릭됨');
    this.props.history.push('/shoes/datail');
  };

  render() {
    const { productList, bestItem, mainData, promotion } = this.state;
    return (
      <div>
        <div className="mainContent">
          <section className="mainContentWrap">
            <article className="mainContentBox">
              <ul className="contentItemBox">
                <h2 className="contentItemHeader">WEEKLY BEST</h2>
                {bestItem.map(element => {
                  return (
                    <ContentItem
                      key={element.id}
                      image={element.image[0].image_url}
                      title={element.name}
                      text={element.description}
                      goToProductList={this.goToProductList}
                    />
                  );
                })}
                {bestItem.map(element => {
                  return (
                    <ContentItem
                      key={element.id}
                      image={element.image[0].image_url}
                      title={element.name}
                      text={element.description}
                      goToProductList={this.goToProductList}
                    />
                  );
                })}
                {bestItem.map(element => {
                  return (
                    <ContentItem
                      key={element.id}
                      image={element.image[0].image_url}
                      title={element.name}
                      text={element.description}
                      goToProductList={this.goToProductList}
                    />
                  );
                })}
              </ul>
            </article>
            <article className="mainContentBox">
              <ul className="contentItemBox">
                <h2 className="contentItemHeader">NEW ARRIVAL</h2>
                {productList.map(element => {
                  return (
                    <ContentNewItem
                      key={element.id}
                      price={element.price}
                      image={element.image[0].image_url}
                      title={element.name}
                      text={element.description}
                      goToProductDetail={this.goToProductDetail}
                    />
                  );
                })}
                <h2 className="contentItemHeader topBorder">#STYLE in SNS</h2>
                <li className="snsItem">
                  <div className="snsImgBox">
                    <img
                      src="https://z1photorankmedia-a.akamaihd.net/media/p/b/h/pbhvwx4/normal.jpg"
                      alt="컨텐츠사진"
                    />
                  </div>
                  <div className="snsImgBox">
                    <img
                      src="https://z1photorankmedia-a.akamaihd.net/media/p/b/h/pbhvwx4/normal.jpg"
                      alt="컨텐츠사진"
                    />
                  </div>
                  <div className="snsImgBox">
                    <img
                      src="https://z1photorankmedia-a.akamaihd.net/media/p/b/h/pbhvwx4/normal.jpg"
                      alt="컨텐츠사진"
                    />
                  </div>
                </li>
              </ul>
            </article>
            <article className="mainContentBox">
              <ul className="contentItemBox">
                <h2 className="contentItemHeader">STYLE PICK</h2>
                {mainData.map(element => {
                  return (
                    <ContentItem
                      key={element.id}
                      image={element.image}
                      title={element.title}
                      text={element.text}
                      goToProductList={this.goToProductList}
                    />
                  );
                })}
                <h2 className="contentItemHeader topBorder">PROMOTION</h2>
                {promotion.map(element => {
                  return (
                    <Promotion
                      key={element.id}
                      image={element.image}
                      title={element.title}
                      text={element.text}
                      goToSignUp={this.goToSignUp}
                    />
                  );
                })}
              </ul>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(MainContent);
