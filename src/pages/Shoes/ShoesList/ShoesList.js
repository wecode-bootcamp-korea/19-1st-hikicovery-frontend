import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { GoPlus } from 'react-icons/go';
import { FaMinus } from 'react-icons/fa';
import { FaAngleDoubleLeft } from 'react-icons/fa';
import { FaAngleDoubleRight } from 'react-icons/fa';
import ShoesCard from '../ShoesCard/ShoesCard';
import ShoesFilterButton from '../ShoesList/ShoesFilterButton';
import ShoesPaginateNum from '../ShoesPaginate/ShoesPaginateNum';
import '../ShoesPaginate/ShoesPaginate.scss';
import './ShoesList.scss';

class ShoesList extends Component {
  constructor() {
    super();
    this.state = {
      shoesData: [],
      open: false,
      PageNo: 1,
      PageNoMax: 1,
      ordering: '-release_at',
    };
  }

  componentDidMount() {
    this.getProductData();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.search !== this.props.location.search) {
      fetch(`http://10.58.1.224:8000/products${this.props.location.search}`)
        .then(res => res.json())
        .then(data => {
          this.setState({
            PageNoMax: data.max_page,
            shoesData: data.product_list,
          });
        });
    }
  }

  getProductData = () => {
    const { PageNo, ordering } = this.state;
    fetch(
      `http://10.58.1.224:8000/products?PageNo=${PageNo}&Show=8&ordering=${ordering}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({
          PageNoMax: data.max_page,
          shoesData: data.product_list,
        });
      });
  };

  clickLeft = () => {
    const { PageNo } = this.state;
    let nextPageNum = PageNo;

    if (PageNo > 1) {
      nextPageNum--;
      this.setState({ PageNo: nextPageNum });
    }
    this.props.history.push(`/shoes?PageNo=${Number(nextPageNum)}&Show=8`);
  };

  clickRight = () => {
    const { PageNo, PageNoMax } = this.state;
    let nextPageNum = PageNo + 1;

    if (nextPageNum >= 1 && nextPageNum <= PageNoMax) {
      this.setState({ PageNo: nextPageNum });
      this.props.history.push(`/shoes?PageNo=${Number(nextPageNum)}&Show=8`);
    }
  };

  fetchShoes = number => {
    this.setState({ PageNo: number });
    this.props.history.push(`/shoes?PageNo=${number}&Show=8`);
  };

  handleClickOpen = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  clickSort = el => {
    const { PageNo } = this.state;
    this.setState({
      ordering: el,
    });
    this.props.history.push(
      `/shoes?PageNo=${Number(PageNo)}&Show=8&ordering=${el}`
    );
  };

  render() {
    const { shoesData } = this.state;
    const PageNoNum = [...Array(Number(this.state.PageNoMax)).keys()];
    const { clickLeft, clickRight } = this;

    return (
      <div className="ShoesList">
        <div className="list">
          <section className="filter">
            <div className="firstFilter">
              <ul>
                <li onClick={() => this.clickSort('-release_at')}>신상품순</li>
                <li
                  onClick={() => this.clickSort('-productsale__product_sales')}
                >
                  판매순
                </li>
                <li onClick={() => this.clickSort('-price')}>높은가격순</li>
                <li onClick={() => this.clickSort('price')}>낮은가격순</li>
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

          <section className="shoesCardList">
            <ul className="shoesCardListUl">
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
                    image={shoes.image}
                    name={shoes.name}
                    price={shoes.price}
                    product_stock={shoes.product_stock}
                  />
                );
              })}
            </ul>
          </section>

          <div className="ShoesPaginate">
            <ul className="paginateUl">
              <li className="prevArrow">
                <FaAngleDoubleLeft onClick={clickLeft} />
              </li>
              {PageNoNum.map((num, index) => (
                <ShoesPaginateNum
                  key={index}
                  num={num + 1}
                  fetchShoes={this.fetchShoes}
                />
              ))}
              <li className="nextArrow">
                <FaAngleDoubleRight onClick={clickRight} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ShoesList);
