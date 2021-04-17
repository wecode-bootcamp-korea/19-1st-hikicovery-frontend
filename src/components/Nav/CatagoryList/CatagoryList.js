import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CatagoryItem from './CatagoryItem/CatagoryItem';
import './CatagoryList.scss';

class CatagoryList extends Component {
  state = {
    isView: false,
  };

  showCatagory = () => {
    const { isView } = this.state;
    this.setState({
      isView: isView ? false : true,
    });
  };

  render() {
    const { isView } = this.state;
    const { showCatagory } = this;
    return (
      <ul className="catagoryWrapper">
        {catagoryList.map((catagory, index) => {
          return (
            <>
              <li className="catagoryList" key={index} onClick={showCatagory}>
                <Link>
                  <span>{catagory}</span>
                </Link>
                <CatagoryItem catagory={catagory} isView={isView} />
              </li>
            </>
          );
        })}
      </ul>
    );
  }
}

export default CatagoryList;

const catagoryList = [
  'MEN',
  'WOMEN',
  'KIDS',
  'SHOES',
  'ACC',
  'OUTLET',
  'PROMOTION',
  '#STYLE in SNS',
  'DISCOVERER',
];
