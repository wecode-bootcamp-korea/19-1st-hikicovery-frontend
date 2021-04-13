import React, { Component } from 'react';

class ColorList extends Component {
  render() {
    return (
      <li className="payment_color_list">
        <a href="/">
          <img src="{this.props.image}" alt="색상별 제품사진" />
        </a>
      </li>
    );
  }
}

export default ColorList;
