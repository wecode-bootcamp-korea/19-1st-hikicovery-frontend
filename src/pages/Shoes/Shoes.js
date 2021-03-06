import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ShoesTop from './ShoesTop/ShoesTop';
import ShoesBestItem from './ShoesBestItem/ShoesBestItem';
import ShoesList from './ShoesList/ShoesList';
import './Shoes.scss';

class Shoes extends Component {
  render() {
    return (
      <div className="shoes">
        <ShoesTop />
        <ShoesBestItem />
        <ShoesList />
      </div>
    );
  }
}
export default withRouter(Shoes);
