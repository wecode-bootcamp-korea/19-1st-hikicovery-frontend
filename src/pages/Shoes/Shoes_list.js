import { Component } from 'react';
import { GoPlus } from 'react-icons/go';

class Shoes_list extends Component {
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
        <section className="filter">
          <div className="first_filter">
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

          <div className="last_filter">
            <select name="" id="" className="filter_select">
              <option value="40개씩 보기">40개씩 보기</option>
              <option value="80개씩 보기">80개씩 보기</option>
              <option value="120개씩 보기">120개씩 보기</option>
            </select>
            <button className="filter_button">
              FILTE <GoPlus />
            </button>
          </div>
        </section>
        <section className="list_product">
          <ul>
            {this.state.ShoesData.map(ShoesList => {
              return (
                <li key={ShoesList.id}>
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
                      src={ShoesList.shoes_img}
                      hoverSrc={ShoesList.shoes_img_hover}
                    />
                  </div>
                  <div className="best_item_info">
                    <p className="txt_name">{ShoesList.shoes_name}</p>
                    <p className="txt_price">{ShoesList.shoes_price}</p>
                    <div className="txt_size">
                      <ul>
                        <li>{ShoesList.shoes_size_list}</li>
                      </ul>
                    </div>
                  </div>
                </li>
              );
            })}
            ;
          </ul>
        </section>
      </>
    );
  }
}

export default Shoes_list;
