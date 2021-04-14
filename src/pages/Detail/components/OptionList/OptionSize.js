import React, { Component } from 'react';
import SizeList from './List/SizeList';
import './OptionSize.scss';

class OptionSize extends Component {
  constructor() {
    super();
    this.state = {
      sizeList: [],
    };
  }

  componentDidMount() {
    fetch('/data/DetailSizedata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          sizeList: data,
        });
      });
  }
  render() {
    return (
      <li className="optionSize">
        <p className="paymentOptionTitle">사이즈</p>
        <ul className="paymentSizeListbox">
          {this.state.sizeList.map(element => {
            return <SizeList key={element.id} size={element.size} />;
          })}
        </ul>
        <p>
          <a href="/">Size Guide</a>
        </p>
      </li>
    );
  }
}

export default OptionSize;
