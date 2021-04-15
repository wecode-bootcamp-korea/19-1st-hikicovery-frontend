import React, { Component } from 'react';
import './SizeList.scss';

class SizeList extends Component {
  constructor() {
    super();
    this.state = {
      select: false,
    };
  }

  selectColorBtn = () => {
    this.setState({
      select: !this.state.select,
    });
  };

  render() {
    return (
      <li className="sizeList">
        <button
          className={this.state.select ? 'selected' : ''}
          onClick={this.selectColorBtn}
        >
          {this.props.size}
        </button>
      </li>
    );
  }
}

export default SizeList;
