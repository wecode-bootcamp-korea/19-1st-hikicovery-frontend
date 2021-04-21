import React, { Component } from 'react';
import Nav from '../../components/Nav/Nav';
import FixMenuBar from '../../components/FixMenuBar/FixMenuBar';
import './Main.scss';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

class Main extends Component {
  state = {
    imgIndex: 0,
  };

  changeMainImg = num => {
    const { imgIndex } = this.state;
    let imgIndex2 = imgIndex;

    this.setState({ imgIndex: imgIndex + num });

    if (imgIndex === 6) {
      imgIndex2 = 0;
    }

    if (imgIndex === -1) {
      imgIndex2 = 6;
    }
  };

  render() {
    const { imgIndex } = this.state;
    const { changeMainImg } = this;
    return (
      <div className="main">
        <div className="mainBackImgWrapper">
          <img
            src={MAIN_BACK_IMG_LIST[imgIndex].url}
            alt="메인배경이미지"
            className="mainBackImg"
          />
        </div>
        <div className="mainSlideController">
          <button onClick={() => changeMainImg(-1)} className="mainPrevButton">
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button onClick={() => changeMainImg(1)} className="mainNextButton">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>
      </div>
    );
  }
}

export default Main;

const MAIN_BACK_IMG_LIST = [
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
  {
    id: 3,
    url:
      'https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_97_KOR_20210415112127.png',
  },
  {
    id: 4,
    url:
      'https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_107_KOR_20210413173838.jpg',
  },
  {
    id: 5,
    url:
      'https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_101_KOR_20210319162531.jpg',
  },
  {
    id: 6,
    url:
      'https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_108_KOR_20210415095117.png',
  },
  {
    id: 7,
    url:
      'https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_105_KOR_20210401170117.jpg',
  },
];
