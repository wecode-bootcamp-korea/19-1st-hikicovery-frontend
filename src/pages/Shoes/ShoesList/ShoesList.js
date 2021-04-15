import { Component } from 'react';
import { GoPlus } from 'react-icons/go';
import ShoesCard from '../ShoesCard./ShoesCard';
import './ShoesList.scss';

class ShoesList extends Component {
  constructor() {
    super();
    this.state = {
      shoesData: [],
    };
  }

  componentDidMount() {
    fetch('/data/ShoesData.json')
      .then(json => json.json())
      .then(data =>
        this.setState({
          shoesData: data,
        })
      );
  }

  render() {
    const { shoesData } = this.state;
    return (
      <div className="list">
        <section className="filter">
          <div className="firstFilter">
            <ul>
              <li>
                <a href="">추천순</a>
              </li>
              <li>
                <a href="">신상품순</a>
              </li>
              <li>
                <a href="">판매순</a>
              </li>
              <li>
                <a href="">높은가격순</a>
              </li>
              <li>
                <a href="">낮은가격순</a>
              </li>
            </ul>
          </div>

          <div className="lastFilter">
            <select name="" id="" className="filterSelect">
              <option value="40개씩 보기">40개씩 보기</option>
              <option value="80개씩 보기">80개씩 보기</option>
              <option value="120개씩 보기">120개씩 보기</option>
            </select>
            <button className="filterButton">
              FILTE <GoPlus />
            </button>
          </div>
        </section>

        <ul className="shoesCardUl">
          {shoesData.map(shoes => {
            return (
              <ShoesCard
                key={shoes.id}
                id={shoes.id}
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

export default ShoesList;
