import React, { Component } from 'react';
import './ProductImage.scss';

class ProductImage extends Component {
  render() {
    const { image } = this.props;
    return (
      <div div className="productImage">
        <img src={image} alt="제품사진" />
      </div>
    );
  }
}

export default ProductImage;
