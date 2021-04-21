import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import CategoryItem from './CategoryItem/CategoryItem';
import CATEGORY_LIST from './CATEGORY_LIST';
import './Nav.scss';

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

        {CATEGORY_LIST.map((category, index) => {
          return (
            <li className="categoryList" key={index}>
              <Link
                onClick={() => {
                  isView(index);
                }}
                // to={`/${category.category}`}
              >
                {category.category}
              </Link>
              {this.state.viewId === index && (
                <CategoryItem category={category.subCategoryList} />
              )}
            </li>
          );
        })}
      </nav>
    );
  }
}

export default Nav;
