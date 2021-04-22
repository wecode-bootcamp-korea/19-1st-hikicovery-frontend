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
      newArrival: [],
      weeklyBest: [],
      promotion: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.224:8000/products/new-arrivals', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          newArrival: res.new_arrivals,
        });
      });

    fetch('http://10.58.1.224:8000/products/weekly-best/1', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          weeklyBest: res.weekly_best,
        });
        console.log(res.weekly_best[0].name);
      });

    fetch('/data/maindata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainData: data,
        });
        console.log(data);
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
    const { newArrival, weeklyBest, mainData, promotion } = this.state;
    return (
      <div>
        <div class="mainContent">
          <section class="mainContentWrap">
            <article class="mainContentBox">
              <ul class="contentItemBox">
                <h2 class="contentItemHeader">NEW ARRIVAL</h2>
                {newArrival.map(element => {
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
              </ul>
            </article>
            <article class="mainContentBox">
              <ul class="contentItemBox">
                <h2 class="contentItemHeader">WEEKLY BEST</h2>
                {weeklyBest.map(element => {
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
                <h2 class="contentItemHeader topBorder">#STYLE in SNS</h2>
                <li class="snsItem">
                  <div class="snsImgBox">
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
            <article class="mainContentBox">
              <ul class="contentItemBox">
                <h2 class="contentItemHeader">STYLE PICK</h2>
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
                <h2 class="contentItemHeader topBorder">PROMOTION</h2>
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
