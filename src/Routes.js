import { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Main from './pages/Main/Main';
import Login from './pages/Login';
import Signup from './pages/Signup/Signup';
import Shoes from './pages/Shoes/Shoes';
import Detail from './pages/Detail/Detail';
import Nav from './components/Nav';
import Footer from './components/Footer/Footer';
import FixMenuBar from './components/FixMenuBar';
import Basket from './pages/Basket';
import ResetStyle from './styles/Reset';

export default function Routes() {
  const [quickMenu, setQuickMenu] = useState(false);
  const [isSearchIcon, setIsSearchIcon] = useState(false);
  const [viewIdNumber, setViewIdNumber] = useState(-1);

  const handleOnChangeFocus = () => {
    setIsSearchIcon(!isSearchIcon);
  };

  const getListIdNumber = id => {
    setViewIdNumber(id);
  };

  const showQuickMenu = () => {
    setQuickMenu(quickMenu ? false : true);
  };

  return (
    <Router>
      <Switch>
        <div>
          <ResetStyle />
          <GlobalStyle />
          <Nav
            isSearchIcon={isSearchIcon}
            viewIdNumber={viewIdNumber}
            handleOnChangeFocus={handleOnChangeFocus}
            getListIdNumber={getListIdNumber}
          />
          <FixMenuBar quickMenu={quickMenu} showQuickMenu={showQuickMenu} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/shoes" component={Shoes} />
          <Route exact path="/shoes/:id" component={Detail} />
          <Route exact path="/basket" component={Basket} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}
