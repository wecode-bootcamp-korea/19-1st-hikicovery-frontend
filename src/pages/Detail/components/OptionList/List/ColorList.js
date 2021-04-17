import React, { Component } from 'react';
import './ColorList.scss';

class ColorList extends Component {
  constructor() {
    super();
    this.state = {
      select: false,
    };
  }

  selectColorBtn = () => {
    const { select } = this.state;
    this.setState({
      select: !select,
    });
  };

  render() {
    const { images } = this.props;
    const { select } = this.state;
    return (
      <div className="colorList">
        <li
          className={select ? 'paymentColorList selected' : 'paymentColorList'}
          onClick={this.selectColorBtn}
        >
          <img src={images} alt="색상별 제품사진" />
        </li>
      </div>
    );
  }
}

export default ColorList;
