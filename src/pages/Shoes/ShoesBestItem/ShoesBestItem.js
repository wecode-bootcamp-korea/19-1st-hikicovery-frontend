import { Component } from 'react';
import ShoesCard from '../ShoesCard./ShoesCard';
import './ShoesBestItem.scss';

class ShoesBestItem extends Component {
  constructor() {
    super();
    this.state = {
      shoesData: [],
    };
  }

  componentDidMount() {
    fetch('/data/ShoesData.json')
      .then(json => json.json())
      .then(data => {
        console.log(data);
        this.setState({
          shoesData: data,
        });
      });
  }
  render() {
    const { shoesData } = this.state;
    return (
      <div className="BestItem">
        <h3>BEST ITEM</h3>
        <ul className="shoesCardUl">
          {shoesData.map(shoes => {
            return (
              <ShoesCard
                key={shoes.id}
                shoes_img={shoes.shoes_img}
                shoes_name={shoes.shoes_name}
                shoes_price={shoes.shoes_price}
                shoes_size_list={shoes.shoes_size_list}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}

export default ShoesBestItem;
