import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CategoryItem.scss';

class CategoryItem extends Component {
  render() {
    const { category } = this.props;

    return (
      <>
        <ul>
          {category.map((list, index) => {
            return (
              <li key={index} className="categoryBox">
                <Link className="categoryItem" to="">
                  {list.subCategory}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default CategoryItem;
