import React, { Component } from 'react';
import ShoesList from '../ShoesList/ShoesList';
import CategoryTitle from './CategoryTitle';

class ShoesCategory extends Component {
  render() {
    return (
      <div className="ShoesKategorie">
        <CategoryTitle data={Title} />
        <ShoesList />
      </div>
    );
  }
}

const Title = [
  {
    id: 1,
    text: '이름',
  },
  {
    id: 2,
    text: '이름',
  },
  {
    id: 3,
    text: '이름',
  },
];

export default ShoesCategory;
