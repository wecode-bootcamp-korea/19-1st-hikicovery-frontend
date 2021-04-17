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
    const { colorList } = this.props;
    const { select } = this.state;
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
