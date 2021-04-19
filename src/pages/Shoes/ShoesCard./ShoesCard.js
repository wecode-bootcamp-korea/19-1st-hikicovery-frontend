import React, { Component } from 'react';
import './ShoesCard.scss';

class ShoesCard extends Component {
  constructor() {
    super();
    this.state = {
      imgHover: false,
    };
  }

  handleHover = () => {
    this.setState({
      imgHover: !this.state.imgHover,
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

    // const { id, image, name, price, product_stock } = this.props;

    return (
      // <div className="shoescard">
      //   <li className="shoesCardLi" key={id}>
      //     {/* 해당부분에 id값이 들어가는게 아닌지..? 오류가 나는데 어디에 id값을 넣어야하는지..*/}
      //     <div
      //       className="shoesCardImg"
      //       onMouseOver={this.handleHover}
      //       onMouseLeave={this.handleHover}
      //     >
      //       {image.map(image => {
      //         console.log(image[1].image_url);
      //         const { image_b } = image[1].image_url;
      //         const { image_a } = image[0].image_url;
      //         return (
      //           <img
      //             className={this.state.imgHover ? 'hoverImg' : 'defaultImg'}
      //             alt="shoesCardImg"
      //             src={this.state.imgHover ? { image_a } : { image_b }}
      //           />
      //         );
      //       })}
      //     </div>

      //     {this.state.imgHover && (
      //       <div className="bestItemInfo">
      //         <p className="txtName">{name}</p>
      //         <p className="txtPrice">{price}</p>
      //         <div className="txtSize" key={id}>
      //           {product_stock.map(shoes => {
      //             return <p className="txt">{shoes.size}</p>;
      //           })}
      //         </div>
      //       </div>
      //     )}
      //   </li>
      // </div>

      <div className="shoescard">
        <li className="shoesCardLi" key={id}>
          {/* 해당부분에 id값이 들어가는게 아닌지..? 오류가 나는데 어디에 id값을 넣어야하는지..*/}
          <div
            className="shoesCardImg"
            onMouseOver={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <img
              className={this.state.imgHover ? 'hoverImg' : 'defaultImg'}
              alt="shoesCardImg"
              src={this.state.imgHover ? shoes_img_hover : shoes_img}
            />
          </div>

          {this.state.imgHover && (
            <div className="bestItemInfo">
              <p className="txtName">{shoes_name}</p>
              <p className="txtPrice">{shoes_price}</p>
              <div className="txtSize" key={id}>
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
