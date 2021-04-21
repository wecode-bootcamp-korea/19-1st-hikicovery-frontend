import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Main from './pages/Main/Main';
// import Login from './pages/Login/Login';
// import Signup from './pages/Signup/Signup';

// import Shoes from './pages/Shoes/Shoes';
import Detail from './pages/Detail/Detail';

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} /> */}
          <Route exact path="/shoes/" component={Shoes} />
          {/* <Route exact path="/shoes/detail" component={Detail} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routes;

/**
 * 1. history.push 페이지 이동시켜주는 함수
 * 2. Route 컴포넌트에서 history, location, match 라는 객체를 제공해주어서 가능한 것.
 * 3. 그렇다면 Route 컴포넌트를 통해서 위의 3가지 객체를 제공받지 못하는 컴포넌트에서는 history.push 함수를 어떻게 사용할 수 있을까요?
 * 4. 이럴때 withRouter 를 사용한다.
 * 5. withRouter 는 함수 입니다. 이 함수는 컴포넌트를 인자로 받고, 해당 컴포넌트에 history, location, match 라는 객체를 부여한 새로운 컴포넌트를 반환.
 * 6. this.props.match.params.tony
 **/
