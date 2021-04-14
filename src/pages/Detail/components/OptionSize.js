import React, { Component } from 'react';
import SizeList from './SizeList';

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
      <div>
        <li className="payment_option_size">
          <p className="payment_option_title">사이즈</p>
          <ul className="payment_size_listbox">
            {this.state.sizeList.map(element => {
              return <SizeList key={element.id} size={element.size} />;
            })}
          </ul>
          <p>
            <a href="/">Size Guide</a>
          </p>
        </li>
      </div>
    );
  }
}

export default OptionSize;
