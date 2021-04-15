import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './FixMenuBar.scss';
import { BsPersonFill, BsBagFill } from 'react-icons/bs';
import { MdWatchLater } from 'react-icons/md';

class FixMenuBar extends Component {
  state = {
    quickMenu: false,
  };

  showQuickMenu = () => {
    const { quickMenu } = this.state;
    this.setState({
      quickMenu: quickMenu ? false : true,
    });
  };

  render() {
    const { showQuickMenu } = this;
    const { quickMenu } = this.state;
    return (
      <aside className="fixMenuBar">
        <ul>
          <li className="fixMenuBarMenu">
            <button onClick={showQuickMenu} className="fixMenuBarButton">
              <BsPersonFill></BsPersonFill>
            </button>
            {quickMenu && (
              <div className="quickMenu">
                <Link to="/login">LOG-IN</Link>
                <Link to="/signup">회원가입</Link>
                <Link to="">마이페이지</Link>
              </div>
            )}
          </li>
          <li className="fixMenuBarMenu">
            <button className="fixMenuBarButton">
              <BsBagFill></BsBagFill>
            </button>
          </li>
          <li className="fixMenuBarMenu">
            <button className="fixMenuBarButton">
              <MdWatchLater></MdWatchLater>
            </button>
          </li>
        </ul>
      </aside>
    );
  }
}

export default FixMenuBar;
