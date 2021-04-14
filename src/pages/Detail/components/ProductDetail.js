import React, { Component } from 'react';
import ProductContent from './ProductContent/ProductContent';
import ProductOption from './ProductOption/ProductOption';
import './ProductDetail.scss';

class ProductDetail extends Component {
  render() {
    return (
      <div className="ProductDetail">
        <section className="contentProductDetail">
          <ProductContent />
          <ProductOption />
        </section>
      </div>
    );
  }
}

export default ProductDetail;
