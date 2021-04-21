import React, { Component } from 'react';
import './ShoesFilterButton.scss';

export default class ShoesListButton extends Component {
  constructor() {
    super();
    this.state = {
      shoesSize: [],
      shoesColor: [],
      selectedSize: [],
      selectedColor: [],
    };
  }

  componentDidMount() {
    fetch('/data/ShoesData.json')
      .then(json => json.json())
      .then(data =>
        this.setState({
          shoesSize: data.filter.shoes_size_list,
          shoesColor: data.filter.shoes_color,
        })
      );
  }

  handleSelectedSize = size => {
    this.setState(
      {
        selectedSize: [...this.state.selectedSize, size],
      }
      // () => console.log(this.state.selectedSize) // 콜백함수 : 함수의 인자로 들어간 함수
    );
  };

  handleSelectedColor = color => {
    this.setState({
      selectedColor: [...this.state.selectedColor, color],
    });
  };

  render() {
    const { shoesSize, shoesColor } = this.state;
    return (
      <div className="shoeslistbutton">
        <div className="filterButtonOn">
          <div className="buttonSizebox">
            <h3>사이즈</h3>
            <div className="sizeClick">
              {shoesSize.map(shoesSize => {
                return (
                  <div
                    className="checkSize"
                    key={shoesSize}
                    onClick={() => this.handleSelectedSize(shoesSize)}
                  >
                    <input type="checkbox" value={shoesSize} />
                    <span className="size">{shoesSize}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="buttonColor">
            <h3>색상</h3>
            <div className="colorClick">
              {shoesColor.map(shoesColor => {
                return (
                  <div className="buttonImgTxt" key={shoesColor.id}>
                    <img
                      className={
                        this.state.selectedColor
                          ? 'buttonColorimg'
                          : 'buttonColorimgNo'
                      }
                      //클릭시 보더 표시 어떻게?
                      src={shoesColor.img_url}
                      key={shoesColor}
                      onClick={() => this.handleSelectedColor(shoesColor)}
                    />
                    <div className="buttonColortxt">{shoesColor.color}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="buttonPrice">
            <h3>가격</h3>
            <div className="priceClick">
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="300"
                step="5"
              ></input>
            </div>
          </div>

          <div className="buttons">
            <button className="reset"> 초기화 </button>
            <button className="search"> 검색 </button>
          </div>
        </div>
      </div>
    );
  }
}
