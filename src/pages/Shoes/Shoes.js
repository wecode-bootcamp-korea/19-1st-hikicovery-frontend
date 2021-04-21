import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ShoesTop from './ShoesTop/ShoesTop';
import ShoesBestItem from './ShoesBestItem/ShoesBestItem';
import ShoesList from './ShoesList/ShoesList';
// import ShoesCategory from './ShoesCategory/ShoesCategory';
import './Shoes.scss';

class Shoes extends Component {
  render() {
    return (
      <div className="shoes">
        <ShoesTop />
        <ShoesBestItem />
        <ShoesList />
        {/* <ShoesCategory /> */}
      </div>
    );
  }
}

export default withRouter(Shoes);
