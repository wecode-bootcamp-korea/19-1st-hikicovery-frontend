import React, { Component } from 'react';

class SizeList extends Component {
  render() {
    return (
      <li className="payment_size_list">
        <button>{this.props.size}</button>
      </li>
    );
  }
}

export default SizeList;
