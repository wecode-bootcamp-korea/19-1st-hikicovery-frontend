import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail';
import './index.scss';

class Detail extends Component {
  render() {
    return (
      <div className="Detail">
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
