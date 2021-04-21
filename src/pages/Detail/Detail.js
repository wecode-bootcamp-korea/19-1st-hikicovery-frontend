import React, { Component } from 'react';
import ProductDetail from './components/ProductDetail';
import Nav from '../../components/Nav/Nav';
import FixMenubar from '../../components/FixMenuBar/FixMenuBar';
import Footer from '../../components/Footer/Footer';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <div className="wrap">
          <Nav />
          <ProductDetail />
          <FixMenubar />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Detail;
