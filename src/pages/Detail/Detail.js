import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div>
        <div className="wrap">
          <nav>nav 자리</nav>
          <ProductDetail></ProductDetail>
          <div className="fixbar">고정메뉴 자리</div>
        </div>
      </div>
    );
  }
}

export default Detail;
