import { Component } from 'react';
import ShoesCard from '../ShoesCard/ShoesCard';
import './ShoesBestItem.scss';
import { API_URL } from '../../../config';

class ShoesBestItem extends Component {
  constructor() {
    super();
    this.state = {
      shoesData: [],
    };
  }

  componentDidMount() {
    fetch(`${API_URL}/products/best-items`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          shoesData: data.best_items,
        });
      });
  }

  //목데이터부분
  // componentDidMount() {
  //   fetch('/data/ShoesData.json')
  //     .then(json => json.json())
  //     .then(data => {
  //       this.setState({
  //         shoesData: data.shoes,
  //       });
  //     });
  // }
  render() {
    const { shoesData } = this.state;
    return (
      <div className="BestItem">
        <h3>BEST ITEM</h3>
        <div className="shoesCardBox">
          <ul className="shoesCardUl">
            {shoesData.map(shoes => {
              return (
                //목데이터부분
                // <ShoesCard
                //   key={shoes.id}
                //   shoes_img={shoes.shoes_img}
                //   shoes_img_hover={shoes.shoes_img_hover}
                //   shoes_name={shoes.shoes_name}
                //   shoes_price={shoes.shoes_price}
                //   shoes_size_list={shoes.shoes_size_list}
                // />
                <ShoesCard
                  key={shoes.id}
                  id={shoes.id}
                  image={shoes.image}
                  name={shoes.name}
                  price={shoes.price}
                  product_stock={shoes.product_stock}
                />
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default ShoesBestItem;
