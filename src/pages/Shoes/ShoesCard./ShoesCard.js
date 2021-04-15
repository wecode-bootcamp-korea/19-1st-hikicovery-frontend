import React, { Component } from 'react';
import './ShoesCard.scss';

class ShoesCard extends Component {
  render() {
    const {
      id,
      shoes_img,
      shoes_name,
      shoes_price,
      shoes_size_list,
    } = this.props;
    return (
      <div className="shoescard">
        <li className="shoesCardLi" key={id}>
          <div className="shoesCardImg">
            <img alt="shoesCardImg" src={shoes_img} />
          </div>

          <div className="bestItemInfo ">
            <p className="txtName">{shoes_name}</p>
            <p className="txtPrice">{shoes_price}</p>
            <div className="txtSize">
              <div> {shoes_size_list}</div>
            </div>
          </div>
        </li>
      </div>
    );
  }
}

export default ShoesCard;
