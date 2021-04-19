import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatagoryItem.scss';

class CatagoryItem extends Component {
  render() {
    const { catagory } = this.props;

    return (
      <>
        {catagory.map((list, index) => {
          return (
            <li key={index} className="catagoryBox">
              <Link className="catagoryItem" to="">
                {list.subCatagory}
              </Link>
            </li>
          );
        })}
      </>
    );
  }
}

export default CatagoryItem;
