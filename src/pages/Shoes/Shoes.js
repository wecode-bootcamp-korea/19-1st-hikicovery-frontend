import { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Nav from '../../components/Nav/Nav';
// import FixMenuBar from '../../components/FixMenuBar/FixMenuBar';
import ShoesTop from './ShoesTop/ShoesTop';
import ShoesBestItem from './ShoesBestItem/ShoesBestItem';
import ShoesList from './ShoesList/ShoesList';
import Footer from '../../components/Footer/Footer';
import './Shoes.scss';

class Shoes extends Component {
  render() {
    return (
      <div className="shoes">
        {/* <Nav />
        <FixMenuBar /> */}
        <ShoesTop />
        <ShoesBestItem />
        <ShoesList />
        <Footer />
      </div>
    );
  }
}

export default withRouter(Shoes);
