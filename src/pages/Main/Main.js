import React, { Component } from 'react';
import MainContent from './components/MainContent/MainContent';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import './Main.scss';

class Main extends Component {
  state = {
    imgIndex: 0,
  };

  changeMainImg = num => {
    const { imgIndex } = this.state;
    this.setState({ imgIndex: imgIndex + num });
  };

  render() {
    const { changeMainImg } = this;
    const { imgIndex } = this.state;
    return (
      <div>
        <div className="mainWrapper">
          <ul className="mainBackImgWrapper">
            <li className="mainImgBox">
              <img src={MAIN_BACK_IMG_LIST[imgIndex].url}></img>
            </li>
          </ul>

          <div className="mainSlideController">
            <button
              onClick={() => changeMainImg(-1)}
              className="mainPrevButton"
            >
              <FaArrowLeft></FaArrowLeft>
            </button>
            <button onClick={() => changeMainImg(1)} className="mainNextButton">
              <FaArrowRight></FaArrowRight>
            </button>
          </div>
        </div>
        <MainContent />
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
