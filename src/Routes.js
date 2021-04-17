import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './pages/Main/Main';
// import Login from './pages/Login/Login';
// import Signup from './pages/Signup/Signup';
// import Shoes from './pages/Shoes/Shoes';
import Detail from './pages/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/shoes" component={Shoes} /> */}
          <Route exact path="/shoes/detail" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
