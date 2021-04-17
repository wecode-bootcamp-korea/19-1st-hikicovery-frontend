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
    const { select } = this.state;
    this.setState({
      select: !select,
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
