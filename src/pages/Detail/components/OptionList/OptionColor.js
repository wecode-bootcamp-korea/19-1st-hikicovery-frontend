import React, { Component } from 'react';
import ColorList from './List/ColorList';
import './OptionColor.scss';

class OptionColor extends Component {
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
    const { color } = this.props;
    const { select } = this.state;
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
                  select={select}
                  selectColorBtn={this.selectColorBtn}
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
