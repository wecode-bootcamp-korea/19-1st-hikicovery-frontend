import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import FixMenuBar from '../../components/FixMenuBar/FixMenuBar';
import './Main.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

class Main extends Component {
  state = {
    imgIndex: 0,
    mainBackImgList: [
      {
        id: 1,
        url:
          'https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_96_KOR_20210303165335.jpg',
      },
      {
        id: 2,
        url:
          'https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_103_KOR_20210324181115.jpg',
      },
    ],
  };

  prev = () => {};

  next = () => {
    const { imgIndex } = this.state;
    this.setState({
      imgIndex: imgIndex + 1,
    });
  };

  render() {
    const { mainBackImgList, imgIndex } = this.state;
    const { prev, next } = this;
    return (
      <div className="main">
        <div className="mainBackImgWrapper">
          <img
            src={mainBackImgList[imgIndex].url}
            alt="메인배경이미지"
            className=""
          />
        </div>
        <div className="mainSlideController">
          <button onClick={prev} className="mainPrevButton">
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button onClick={next} className="mainNextButton">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>

        <Nav />
        <FixMenuBar />
      </div>
    );
  }
}

export default Main;
