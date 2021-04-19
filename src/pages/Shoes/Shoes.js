import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ShoesTop from './ShoesTop/ShoesTop';
import ShoesBestItem from './ShoesBestItem/ShoesBestItem';
import ShoesList from './ShoesList/ShoesList';
import ShoesKategorie from './ShoesKategorie/ShoesCategory';
import './Shoes.scss';

class Shoes extends Component {
  render() {
    return (
      <div className="shoes">
        <ShoesTop />
        <ShoesBestItem />
        <ShoesList />
        <ShoesKategorie />
      </div>
    );
  }
}

export default withRouter(Shoes);
