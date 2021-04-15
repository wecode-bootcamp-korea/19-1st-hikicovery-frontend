import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Nav.scss';
import CatagoryList from './CatagoryList/CatagoryList';

class Nav extends Component {
  state = {
    searchIcon: false,
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
  render() {
    const { searchIcon } = this.state;
    const { focusOn, focusOut } = this;
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
        <CatagoryList />
      </nav>
    );
  }
}

export default Nav;
