import React, { Component } from 'react';
import './SizeList.scss';

class SizeList extends Component {
  constructor() {
    super();
    this.state = {
      select: false,
    };
  }

  selectSizeBtn = () => {
    this.setState({
      select: true,
    });
  };

  render() {
    const { size, stock } = this.props;
    const { select } = this.state;
    console.log(this.props);
    return (
      <li className="sizeList">
        <button
          className={select ? '' : 'selected' && stock === 0 ? 'soldOut' : ''}
          onClick={this.selectSizeBtn}
        >
          {size}
        </button>
      </li>
    );
  }
}

export default SizeList;
