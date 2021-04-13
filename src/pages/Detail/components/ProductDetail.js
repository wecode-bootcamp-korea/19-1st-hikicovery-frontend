import React, { Component } from 'react';
//import './ProductDetail.scss';
import ProductImage from './ProductImage';
import ProductOption from './ProductOption';

class ProductDetail extends Component {
  render() {
    return (
      <section className="content_product_detail">
        <ProductImage />
        <ProductOption />
      </section>
    );
  }
}

export default ProductDetail;
