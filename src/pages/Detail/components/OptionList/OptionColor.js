import React, { Component } from 'react';
import ColorList from './List/ColorList';
import './OptionColor.scss';

class OptionColor extends Component {
  render() {
    const { colorList } = this.props;
    return (
      <li className="optionColor">
        <div className="paymentOptionColorbox">
          <p className="paymentOptionTitle">색상</p>
          <ul className="paymentColorListbox">
            {colorList.map(element => {
              return (
                <ColorList
                  key={element.id}
                  images={element.images}
                  colorList={colorList}
                />
              );
            })}
          </ul>
        </div>
      </li>
    );
  }
}

export default OptionColor;
