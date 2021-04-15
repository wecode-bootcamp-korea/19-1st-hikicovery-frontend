import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatagoryList.scss';

class CatagoryList extends Component {
  state = {
    catagoryList: [
      'MEN',
      'WOMEN',
      'KIDS',
      'SHOES',
      'ACC',
      'OUTLET',
      'PROMOTION',
      '#STYLE in SNS',
      'DISCOVERER',
    ],
  };
  render() {
    const { catagoryList } = this.state;
    return (
      <ul className="catagoryWrapper">
        {catagoryList.map((catagory, index) => {
          return (
            <li className="catagoryList" key={index}>
              <Link to="https://www.discovery-expedition.com/main/mall/view">
                <span>{catagory}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CatagoryList;
