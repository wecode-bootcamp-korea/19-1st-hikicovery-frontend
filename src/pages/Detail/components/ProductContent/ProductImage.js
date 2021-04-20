import React, { Component } from 'react';
import './ProductImage.scss';

class ProductImage extends Component {
  render() {
    const { image } = this.props;
    return (
      <div className="productImage">
        {image.map(element => {
          return <img src={element.image_url} alt="제품사진" />;
        })}
      </div>
    );
  }
}

export default ProductImage;
