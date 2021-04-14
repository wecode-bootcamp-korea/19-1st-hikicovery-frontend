import React, { Component } from 'react';
import ProductImage from './ProductImage';
import ProductOption from './ProductOption/ProductOption';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <section className="contentProductDetail">
          <ProductImage />
          <ProductOption />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
