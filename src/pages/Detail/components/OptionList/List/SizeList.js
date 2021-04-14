import React, { Component } from 'react';
import './SizeList.scss';

class SizeList extends Component {
  render() {
    return (
      <li className="sizeList">
        <button>{this.props.size}</button>
      </li>
    );
  }
}

export default SizeList;
