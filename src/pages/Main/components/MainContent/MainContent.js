import React, { Component } from 'react';
import ContentImgBox from '../ContentBox/ContentItem';
import './MainContent.scss';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      mainData: [],
      isOn: false,
    };
  }

  onHover = event => {
    console.log('온');
    this.setState({
      isOn: true,
    });
  };

  componentDidMount() {
    fetch('/data/maindata.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          mainData: data,
        });
      });
  }
  render() {
    const { mainData, isOn } = this.state;
    return (
      <div>
        <div class="mainContent">
          <section class="mainContentWrap">
            <article class="mainContentBox">
              <ul class="contentItemBox">
                <h2 class="contentItemHeader">NEW ARRIVAL</h2>
                {mainData.map(element => {
                  return (
                    <ContentImgBox
                      key={element.id}
                      image={element.image}
                      title={element.title}
                      text={element.text}
                    />
                  );
                })}
              </ul>
              <ul class="snsItemBox">
                <h2 class="contentItemHeader">#STYLE in SNS</h2>
                <li class="snsItem">
                  <div class="snsImgBox">
                    <img
                      src="https://z1photorankmedia-a.akamaihd.net/media/p/b/h/pbhvwx4/normal.jpg"
                      alt="컨텐츠사진"
                      className={isOn === true ? 'imgBox' : ''}
                      onMouseUp={this.onHover}
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
                <h2 class="contentItemHeader">NEW ARRIVAL</h2>
                {mainData.map(element => {
                  return (
                    <ContentImgBox
                      key={element.id}
                      image={element.image}
                      title={element.title}
                      text={element.text}
                    />
                  );
                })}
              </ul>
            </article>
            <article class="mainContentBox">
              <ul class="contentItemBox">
                <h2 class="contentItemHeader">WEEKLY BEST</h2>
                {mainData.map(element => {
                  return (
                    <ContentImgBox
                      key={element.id}
                      image={element.image}
                      title={element.title}
                      text={element.text}
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

export default Main;
