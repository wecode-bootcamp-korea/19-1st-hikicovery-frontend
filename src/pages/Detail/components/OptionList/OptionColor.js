import React, { Component } from 'react';
import ColorList from './List/ColorList';
import './OptionColor.scss';

class OptionColor extends Component {
  render() {
    const { color, handleClickColorList, isSelect } = this.props;
    return (
      <li className="optionColor">
        <div className="paymentOptionColorbox">
          <p className="paymentOptionTitle">색상</p>
          <ul className="paymentColorListbox">
            {color.map(element => {
              return (
                <ColorList
                  key={element.product_id}
                  image={element.product_image}
                  isSelect={isSelect}
                  id={element.product_id}
                  handleClickColorList={handleClickColorList}
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
