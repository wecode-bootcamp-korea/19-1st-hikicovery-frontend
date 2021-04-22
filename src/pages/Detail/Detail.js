import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="wrap">
          <ProductDetail />
        </div>
      </div>
    );
  }
}

export default Detail;
