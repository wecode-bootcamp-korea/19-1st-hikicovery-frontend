import React, { Component } from 'react';
import ShoesList from '../ShoesList.';

export default class ShoesPaginate extends Component {
  state = {
    drink: [],
    userInput: '',
    currentIdx: 1,
  };

  fetchDrink = e => {
    const LIMIT = 10;
    // 한 페이지에 보여줄 데이터 갯수를 10개로 설정하기 위해 Limit 10으로 설정
    const offset = e?.target.dataset.idx;
    //각 페이지 버튼의 data-idx를 offset으로 설정

    fetch(
      `http://10.58.2.83:8000/drinks?limit=${LIMIT}&offset=${offset * LIMIT}`
      // fetch 요청이 들어올 때마다 위에서 설정했던 (페이지 버튼의 번호수 -1) * LIMIT의 데이터부터
      // LIMIT 갯수 만큼 데이터가 출력된다.
      // 즉 1페이지라면 0 ~ 10 개, 2페이지라면 10 ~ 20 개가 출력됩니다.
    )
      .then(res => res.json())
      // 받은 데이터를 js에서 필요로 하는 데이터를 가져온다.
      // HttpResponse가 아닌 JsonResponse로 백엔드에서 전달해준다면 해당 데이터를 받을 수 있지만
      // HttpResponse로 온다면 오류가 납니다!
      .then(res => this.setState({ drink: res }));
    // 위에서 받은 데이터를 this.state.drink 저장합니다.
  };

  render() {
    const { drink, currentIdx } = this.state;
    const { fetchDrink } = this;
    // 비구조 할당

    return (
      <div className="ShoesPaginate">
        <h1>Mini Project - Pagination</h1>
        {
          /* <Buttons currentIdx={currentIdx} fetchDrink={fetchDrink} />
        // 5가지의 data-idx 0~4 까지의 버튼 */
          <ShoesList drink={drink} />
        }
        // 데이터별로 Map을 돌려 상품들을 출력하게 해놓았다.
      </div>
    );
  }
}
