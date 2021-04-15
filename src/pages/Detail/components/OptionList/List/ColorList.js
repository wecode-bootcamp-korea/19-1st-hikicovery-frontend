import React, { Component } from 'react';
import './ColorList.scss';

class ColorList extends Component {
  constructor() {
    super();
    this.state = {
      select: false,
    };
  }

  selectSizeBtn = () => {
    this.setState({
      select: !this.state.select,
    });
  };
  render() {
    const { images } = this.props;
    return (
      <div className="colorList">
        <li
          className={
            this.state.select ? 'paymentColorList selected' : 'paymentColorList'
          }
          onClick={this.selectSizeBtn}
        >
          <a href="/">
            <img src={images} alt="색상별 제품사진" />
          </a>
        </li>
      </div>
    );
  }
}

export default ColorList;
