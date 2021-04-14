import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import './Nav.scss';

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
            className={searchIcon ? 'disabled_search_button' : 'search_button'}
          >
            <FaSearch></FaSearch>
          </button>
          <div onFocus={focusOn} onBlur={focusOut} className="search_input_box">
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
    );
  }
}

export default Nav;
