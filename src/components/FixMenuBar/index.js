import { Link } from 'react-router-dom';
import { BsPersonFill, BsBagFill } from 'react-icons/bs';
import { MdWatchLater } from 'react-icons/md';
import styled from 'styled-components';

const FixMenuBar = ({ quickMenu, showQuickMenu }) => {
  return (
    <FixMenuBarWrap>
      <ul>
        <FixMenuBarItem>
          <FixMenuBarButton onClick={showQuickMenu}>
            <BsPersonFill></BsPersonFill>
          </FixMenuBarButton>
          {quickMenu && (
            <QuickMenu>
              <Link to="/login">LOG-IN</Link>
              <Link to="/signup">회원가입</Link>
              <Link to="">마이페이지</Link>
            </QuickMenu>
          )}
        </FixMenuBarItem>
        <FixMenuBarItem>
          <FixMenuBarButton>
            <Link to="/basket">
              <BsBagFill></BsBagFill>
            </Link>
          </FixMenuBarButton>
        </FixMenuBarItem>
        <FixMenuBarItem>
          <FixMenuBarButton>
            <MdWatchLater></MdWatchLater>
          </FixMenuBarButton>
        </FixMenuBarItem>
      </ul>
    </FixMenuBarWrap>
  );
};

const FixMenuBarWrap = styled.aside`
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 10;
  svg {
    height: 15px;
    width: 15px;
  }
`;

const FixMenuBarItem = styled.li`
  margin-bottom: 5px;
  border: 1px solid black;
`;

const FixMenuBarButton = styled.button`
  height: 35px;
  width: 75px;
  border-bottom: 1px solid black;
  background-color: white;
  cursor: pointer;
`;

const QuickMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  background-color: white;
  a {
    margin: 5px 0;
    color: #666;
  }
  a:hover {
    border-bottom: 1px solid black;
    color: black;
  }
`;

export default FixMenuBar;
