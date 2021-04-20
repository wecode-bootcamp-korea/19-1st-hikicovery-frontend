import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail';
import Footer from '../../components/Footer/Footer';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="wrap">
          <nav>nav 자리</nav>
          <ProductDetail />
          <div className="fixbar">고정메뉴 자리</div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
