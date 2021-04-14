import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Shoes_best_item from './Shoes_best_item';
import Shoes_list from './Shoes_list';
import './Shoes.scss';

class Shoes extends Component {
  render() {
    return (
      <>
        <div className="wrapper">
          <div className="top_slide">
            <img
              src="https://static.discovery-expedition.com/images/display/category/THM/A01/A02/contents/88_5058_95_KOR_20210226202214.jpg"
              alt=""
            />
          </div>
          <div className="best_item">
            <Shoes_best_item />
          </div>
          <div className="list">
            <Shoes_list />;
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Shoes);
