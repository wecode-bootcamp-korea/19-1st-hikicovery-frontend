import { Component } from 'react';
import { Link } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { FaMinus } from 'react-icons/fa';
import ShoesCard from '../ShoesCard./ShoesCard';
import ShoesFilterButton from '../ShoesList/ShoesFilterButton';
// import ShoesPaginate from '../ShoesPaginate/ShoesPaginate';
import './ShoesList.scss';

class ShoesList extends Component {
  constructor() {
    super();
    this.state = {
      shoesData: [],
      open: false,
    };
  }

  componentDidMount() {
    fetch('/data/ShoesData.json')
      .then(json => json.json())
      .then(data =>
        this.setState({
          shoesData: data.shoes,
        })
      );
  }

  // componentDidMount() {
  //   fetch('http://172.30.1.35:8000/products/display/majorview', {
  //     method: 'GET',
  //   })
  //     .then(res => res.json())
  //     .then(data => {
  //       this.setState({
  //         shoesData: data.best_items,
  //       });
  //     });
  // }

  handleClickOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  // updateDate = () => {
  //   const {shoesData} = this.props;
  //   shoesData.filter(element => ‘a’ === element).length;
  // }

  render() {
    const { shoesData } = this.state;

    return (
      <div className="list">
        <section className="filter">
          <div className="firstFilter">
            <ul>
              <li>
                <Link to="/">추천순</Link>
              </li>
              <li>
                <Link to="/">신상품순</Link>
              </li>
              <li>
                <Link to="/">판매순</Link>
              </li>
              <li>
                <Link to="/">높은가격순</Link>
              </li>
              <li>
                <Link to="/">낮은가격순</Link>
              </li>
            </ul>
          </div>

          <div className="lastFilter">
            <select name="" id="" className="filterSelect">
              <option value="20개씩 보기">10개씩 보기</option>
              <option value="40개씩 보기">20개씩 보기</option>
              <option value="80개씩 보기">40개씩 보기</option>
            </select>
            <button className="filterButton" onClick={this.handleClickOpen}>
              FILTE
              {this.state.open ? <FaMinus /> : <GoPlus />}
            </button>
            {this.state.open && <ShoesFilterButton />}
          </div>
        </section>

        <ul className="shoesCardListUl">
          {shoesData.map(shoes => {
            return (
              <ShoesCard
                key={shoes.id}
                shoes_img={shoes.shoes_img}
                shoes_img_hover={shoes.shoes_img_hover}
                shoes_name={shoes.shoes_name}
                shoes_price={shoes.shoes_price}
                shoes_size_list={shoes.shoes_size_list}
              />
              // <ShoesCard
              //   key={shoes.id}
              //   image={shoes.image}
              //   name={shoes.name}
              //   price={shoes.price}
              //   product_stock={shoes.product_stock}
              // />
            );
          })}
        </ul>

        {/* <ShoesPaginate /> */}
      </div>
    );
  }
}

export default ShoesList;
