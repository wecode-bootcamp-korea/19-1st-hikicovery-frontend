import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import MainContent from './pages/Main/components/MainContent/MainContent';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Shoes from './pages/Shoes/Shoes';
import Detail from './pages/Detail/Detail';
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';
import FixMenuBar from './components/FixMenuBar/FixMenuBar';
import Basket from './pages/Basket/Basket';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <div>
            <Nav />
            <FixMenuBar />
            <Route exact path="/" component={Main} />
            <Route exact path="/main" component={MainContent} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/shoes" component={Shoes} />
            <Route exact path="/shoes/detail" component={Detail} />
            <Route exact path="/basket" component={Basket} />
            <Footer />
          </div>
        </Switch>
      </Router>
    );
  }
}

export default Routes;
