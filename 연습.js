import React, { Component } from 'react';
import './ShoesCard.scss';

class ShoesCard extends Component {
  constructor() {
    super();
    this.state = {
      isHovering: false,
    };
  }

  handleMouseHover = () => {
    console.log(232);
    this.setState({
      isHovering: !this.state.isHovering,
    });
  };

  render() {
    const {
      id,
      shoes_img,
      shoes_img_hover,
      shoes_name,
      shoes_price,
      shoes_size_list,
    } = this.props;

    return (
      <div className="shoescard">
        <li className="shoesCardLi" key={id}>
          <div
            className="shoesCardImg"
            onMouseOver={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            <img
              alt="shoesCardImg"
              src={this.state.isHovering ? shoes_img_hover : shoes_img}
            />
          </div>
          {this.state.isHovering && (
            <div className="bestItemInfo">
              <p className="txtName">{shoes_name}</p>
              <p className="txtPrice">{shoes_price}</p>
              <div className="txtSize">
                {shoes_size_list.map(shoes => {
                  return <p className="txt">{shoes.size}</p>;
                })}
              </div>
            </div>
          )}
        </li>
      </div>
    );
  }
}

export default ShoesCard;
