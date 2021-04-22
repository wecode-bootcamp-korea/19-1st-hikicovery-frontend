import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
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
    // 목데이터 부분
    // const {
    //   id,
    //   shoes_img,
    //   shoes_img_hover,
    //   shoes_name,
    //   shoes_price,
    //   shoes_size_list,
    // } = this.props;

    const { id, image, name, price, product_stock } = this.props;
    return (
      <div className="shoescard">
        <li className="shoesCardLi">
          <div
            className="shoesCardImg"
            onMouseOver={this.handleHover}
            onMouseLeave={this.handleHover}
            onClick={() => {
              this.props.history.push(`/shoes/${id}`);
            }}
          >
            {image.length > 0 && (
              <img
                key={id}
                className={this.state.imgHover ? 'defaultImg' : 'hoverImg'}
                alt="shoesCardImg"
                src={
                  this.state.imgHover ? image[1].image_url : image[0].image_url
                }
              />
            )}
          </div>

          {this.state.imgHover && (
            <div className="bestItemInfo">
              <p className="txtName">{name}</p>
              <p className="txtPrice">{price}</p>
              <div className="txtSize" key={id}>
                {product_stock.map((shoes, index) => {
                  return (
                    <p key={index} className="txt">
                      {shoes.size}
                    </p>
                  );
                })}
              </div>
            </div>
          )}
        </li>
      </div>

      // 목데이터 부분
      // <div className="shoescard">
      //   <li className="shoesCardLi">
      //     <div
      //       className="shoesCardImg"
      //       onMouseOver={this.handleHover}
      //       onMouseLeave={this.handleHover}
      //     >
      //       <img
      //         className={this.state.imgHover ? 'hoverImg' : 'defaultImg'}
      //         alt="shoesCardImg"
      //         src={this.state.imgHover ? shoes_img_hover : shoes_img}
      //       />
      //     </div>

      //     {this.state.imgHover && (
      //       <div className="bestItemInfo">
      //         <p className="txtName">{shoes_name}</p>
      //         <p className="txtPrice">{shoes_price}</p>
      //         <div className="txtSize" key={id}>
      //           {shoes_size_list.map(shoes => {
      //             return (
      //               <p className="txt" key={shoes.id}>
      //                 {shoes.size}
      //               </p>
      //             );
      //           })}
      //         </div>
      //       </div>
      //     )}
      //   </li>
      // </div>
    );
  }
}

export default withRouter(ShoesCard);
