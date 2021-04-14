import React, { Component } from 'react';
import ColorList from './ColorList';

class OptionColor extends Component {
  constructor() {
    super();
    this.state = {
      colorList: [],
    };
  }

  componentDidMount() {
    fetch('/data/DetailColordata.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          colorList: data,
        });
      });
  }
  render() {
    return (
      <li className="payment_option_color">
        <ul className="payment_option_colorbox">
          <p className="payment_option_title">색상</p>
          <ul className="payment_color_listbox">
            {this.state.colorList.map(element => {
              return <ColorList key={element.id} images={element.images} />;
            })}
          </ul>
        </ul>
      </li>
    );
  }
}

export default OptionColor;
