import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Nav.scss';
import CatagoryItem from './CatagoryItem/CatagoryItem';

class Nav extends Component {
  state = {
    searchIcon: false,
    viewId: -1,
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

  isView = id => {
    this.setState({
      viewId: id,
    });
  };

  render() {
    const { searchIcon } = this.state;
    const { focusOn, focusOut, isView } = this;
    return (
      <nav className="nav">
        <div className="navImgBox">
          <Link to="/">
            <img
              src="https://static.discovery-expedition.com/pc/static/images/common/logo.png"
              alt="메인로고"
            />
          </Link>
        </div>
        <div className="navSearchBox">
          <button
            className={searchIcon ? 'disabledSearchButton' : 'searchButton'}
          >
            <FaSearch></FaSearch>
          </button>
          <div onFocus={focusOn} onBlur={focusOut} className="searchInputBox">
            <input className="searchInput" placeholder="search" />
          </div>
        </div>
        <div className="underBar"></div>

        {catagoryList.map((catagory, index) => {
          return (
            <li className="catagoryList" key={index}>
              <Link
                onClick={() => {
                  isView(index);
                }}
                // to={`/${catagory.catagory}`}
              >
                {catagory.catagory}
              </Link>
              {this.state.viewId === index && (
                <CatagoryItem catagory={catagory.subCatagoryList} />
              )}
            </li>
          );
        })}
      </nav>
    );
  }
}

export default Nav;

const catagoryList = [
  {
    catagory: 'MEN',
    subCatagoryList: [
      { id: 1, subCatagory: '신상품' },
      { id: 2, subCatagory: '아우터' },
      { id: 3, subCatagory: '상의' },
      { id: 4, subCatagory: '하의' },
      { id: 5, subCatagory: '트레이닝웨어' },
      { id: 6, subCatagory: '비치웨어' },
    ],
  },
  {
    catagory: 'WOMEN',
    subCatagoryList: [
      { id: 1, subCatagory: '신상품' },
      { id: 2, subCatagory: '아우터' },
      { id: 3, subCatagory: '상의' },
      { id: 4, subCatagory: '하의' },
      { id: 5, subCatagory: '트레이닝웨어' },
      { id: 6, subCatagory: '비치웨어' },
    ],
  },
  {
    catagory: 'KIDS',
    subCatagoryList: [
      { id: 1, subCatagory: '신상품' },
      { id: 2, subCatagory: '신학기가방' },
      { id: 3, subCatagory: '아우터' },
      { id: 4, subCatagory: '상의' },
      { id: 5, subCatagory: '하의' },
      { id: 6, subCatagory: '트레이닝웨어' },
      { id: 7, subCatagory: '슈즈' },
      { id: 8, subCatagory: '용품' },
      { id: 9, subCatagory: '비치웨어' },
    ],
  },
  {
    catagory: 'SHOES',
    subCatagoryList: [
      { id: 1, subCatagory: '신상품' },
      { id: 2, subCatagory: 'BUCEKT(버킷)' },
      { id: 3, subCatagory: 'JOGGER(조거)' },
      { id: 4, subCatagory: '라이프스타일' },
      { id: 5, subCatagory: '슬리퍼/샌들' },
    ],
  },
  {
    catagory: 'ACC',
    subCatagoryList: [
      { id: 1, subCatagory: '신상품' },
      { id: 2, subCatagory: '가방' },
      { id: 3, subCatagory: '모자' },
      { id: 4, subCatagory: '용품' },
    ],
  },
  {
    catagory: 'OUTLET',
    subCatagoryList: [
      { id: 1, subCatagory: 'MEN' },
      { id: 2, subCatagory: 'WOMEN' },
      { id: 3, subCatagory: 'KIDS' },
      { id: 4, subCatagory: 'SHOES' },
      { id: 5, subCatagory: 'ACC' },
    ],
  },
  {
    catagory: 'PROMOTION',
    subCatagoryList: [],
  },
  {
    catagory: '#STYLE in SNS',
    subCatagoryList: [],
  },
  {
    catagory: 'DISCOVERER',
    subCatagoryList: [
      { id: 1, subCatagory: 'Stories' },
      { id: 2, subCatagory: 'Videos' },
    ],
  },
];
