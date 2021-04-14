import { Component } from 'react';

class Shoes_best_item extends Component {
  constructor() {
    super();
    this.state = {
      ShoesData: [],
    };
  }

  componentDidMount() {
    fetch('data/ShoesData.json')
      .then(json => json.json())
      .then(data =>
        this.setState({
          ShoesData: data,
        })
      );
  }
  render() {
    return (
      <>
        <h3>BEST ITEM</h3>
        <ul>
          {this.state.ShoesData.map(shoesBestItem => {
            <li key={shoesBestItem.id}>
              {/* <img
                  src="icon.jpg"
                  onMouseOver={event => {
                    this.handlerOver(event);
                  }}
                  onMouseOut={event => {
                    this.handlerOut(event);
                  }}
                /> */}
              <div className="best_item_img">
                <img
                  alt=""
                  src={shoesBestItem.shoes_img}
                  hoverSrc={shoesBestItem.shoes_img_hover}
                />
              </div>
              <div className="best_item_info">
                <p className="txt_name">{shoesBestItem.shoes_name}</p>
                <p className="txt_price">{shoesBestItem.shoes_price}</p>
                <div className="txt_size">
                  <ul>
                    <li>
                      <div> {shoesBestItem.shoes_size_list}</div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>;
          })}
        </ul>
      </>
    );
  }
}

export default Shoes_best_item;
