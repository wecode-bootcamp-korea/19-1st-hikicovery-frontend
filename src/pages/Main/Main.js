import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Main.scss';
import { FaSearch } from 'react-icons/fa';
import { BsPersonFill, BsBagFill } from 'react-icons/bs';
import { MdWatchLater } from 'react-icons/md';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

class Main extends Component {
  state = {
    quickMenu: false,
    searchIcon: false,
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

  showQuickMenu = () => {
    const { quickMenu } = this.state;
    this.setState({
      quickMenu: quickMenu ? false : true,
    });
  };

  focusOn = () => {
    const { searchIcon } = this.state;
    this.setState({
      searchIcon: searchIcon ? searchIcon : true,
    });
  };

  focusOut = () => {
    const { searchIcon } = this.state;
    this.setState({
      searchIcon: searchIcon ? false : searchIcon,
    });
  };

  prev = () => {};

  next = () => {};

  render() {
    const { quickMenu, searchIcon, mainBackImgList } = this.state;
    const { showQuickMenu, focusOn, focusOut, prev, next } = this;
    return (
      <div className="main_wrapper">
        <ul className="main_backImg_wrapper">
          {mainBackImgList.map((backImg, index) => {
            return (
              <li key={index}>
                <img src={backImg.url}></img>
              </li>
            );
          })}
        </ul>

        <div className="main_slide_controller">
          <button onClick={prev} className="main_prev_button">
            <FaArrowLeft></FaArrowLeft>
          </button>
          <button onClick={next} className="main_next_button">
            <FaArrowRight></FaArrowRight>
          </button>
        </div>

        <nav className="nav_wrapper">
          <div className="nav_img_box">
            <Link to="">
              <img
                src="https://static.discovery-expedition.com/pc/static/images/common/logo.png"
                alt=""
              />
            </Link>
          </div>
          <div className="nav_search_box">
            <button
              className={
                searchIcon ? 'disabled_search_button' : 'search_button'
              }
            >
              <FaSearch></FaSearch>
            </button>
            <div
              onFocus={focusOn}
              onBlur={focusOut}
              className="search_input_box"
            >
              <input className="search_input" placeholder="search" />
            </div>
          </div>
          <div className="under_bar"></div>
          <ul className="catagory_wrapper">
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>MEN</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>WOMEN</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>KIDS</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>SHOES</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>ACC</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>OUTLET</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>PROMOTION</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>#STYLE in SNS</span>
              </Link>
            </li>
            <li className="catagory_list">
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>DISCOVERER</span>
              </Link>
            </li>
          </ul>
        </nav>

        <aside className="sideBar_wrapper">
          <ul>
            <li className="sideBar_menu">
              <button onClick={showQuickMenu} className="sideBar_button">
                <BsPersonFill></BsPersonFill>
              </button>
              {quickMenu && (
                <div className="quick_menu">
                  <Link to="">LOG-IN</Link>
                  <Link to="">회원가입</Link>
                  <Link to="">마이페이지</Link>
                </div>
              )}
            </li>
            <li className="sideBar_menu">
              <button className="sideBar_button">
                <BsBagFill></BsBagFill>
              </button>
            </li>
            <li className="sideBar_menu">
              <button className="sideBar_button">
                <MdWatchLater></MdWatchLater>
              </button>
            </li>
          </ul>
        </aside>
      </div>
    );
  }
}

export default Main;
