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
      <aside className="FixMenuBar_wrapper">
        <ul>
          <li className="FixMenuBar_menu">
            <button onClick={showQuickMenu} className="FixMenuBar_button">
              <BsPersonFill></BsPersonFill>
            </button>
            {quickMenu && (
              <div className="quick_menu">
                <Link to="">LOG-IN</Link>
                <Link to="">회원가입</Link>
                <Link to="">마이페이지</Link>
              </div>
            )}
          </li>
          <li className="FixMenuBar_menu">
            <button className="FixMenuBar_button">
              <BsBagFill></BsBagFill>
            </button>
          </li>
          <li className="FixMenuBar_menu">
            <button className="FixMenuBar_button">
              <MdWatchLater></MdWatchLater>
            </button>
          </li>
        </ul>
      </aside>
    );
  }
}

export default FixMenuBar;
