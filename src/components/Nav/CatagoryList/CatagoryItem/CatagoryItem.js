import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './CatagoryItem.scss';

class CatagoryItem extends Component {
  render() {
    const { catagory, isView } = this.props;

    return (
      <>
        {catagoryItem.map((list, index) => {
          return (
            <ul key={index} className="isView">
              <li className="catagoryBox">
                {list[catagory.toLowerCase()] &&
                  list[catagory.toLowerCase()].map(item => {
                    return (
                      <Link className="catagoryItem" to="">
                        {item}
                      </Link>
                    );
                  })}
              </li>
            </ul>
          );
        })}
      </>
    );
  }
}

export default CatagoryItem;

const catagoryItem = [
  { men: ['신상품', '아우터', '상의', '하의', '트레이닝웨어', '비치웨어'] },
  {
    women: ['신상품', '아우터', '상의', '하의', '트레이닝웨어', '비치웨어'],
  },
  {
    kids: [
      '신상품',
      '신학기가방',
      '아우터',
      '상의',
      '하의',
      '트레이닝웨어',
      '슈즈',
      '용품',
      '비치웨어',
    ],
  },
  {
    shoes: [
      '신상품',
      'BUCEKT(버킷)',
      'JOGGER(조거)',
      '라이프스타일',
      '슬리퍼/샌들',
    ],
  },
  {
    acc: ['신상품', '가방', '모자', '용품'],
  },
  {
    outlet: ['MEN', 'WOMEN', 'KIDS', 'SHOES', 'ACC'],
  },
  {
    discoverer: ['Stories', 'Videos'],
  },
];
