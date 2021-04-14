import React, { Component } from 'react';
import ColorList from './List/ColorList';
import './OptionColor.scss';

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
      <li className="optionColor">
        <ul className="paymentOptionColorbox">
          <p className="paymentOptionTitle">색상</p>
          <ul className="paymentColorListbox">
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
