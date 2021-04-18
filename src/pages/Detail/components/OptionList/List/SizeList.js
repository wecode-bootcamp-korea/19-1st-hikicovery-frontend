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
    console.log(this.props.soldOut);
    const { size, soldOut } = this.props;
    const { select } = this.state;
    return (
      <li className="sizeList">
        <button
          className={select ? 'selected' : '' && soldOut ? 'soldOut' : ''}
          onClick={this.selectSizeBtn}
        >
          {size}
        </button>
      </li>
    );
  }
}

export default SizeList;
