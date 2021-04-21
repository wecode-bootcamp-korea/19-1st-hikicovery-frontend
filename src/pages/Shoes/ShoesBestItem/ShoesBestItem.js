import { Component } from 'react';
import ShoesCard from '../ShoesCard/ShoesCard';
import './ShoesBestItem.scss';

class ShoesBestItem extends Component {
  constructor() {
    super();
    this.state = {
      shoesData: [],
    };
  }

  componentDidMount() {
    fetch('http://10.58.1.224:8000/products/best-items', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          shoesData: data.best_items,
        });
      });
  }

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
