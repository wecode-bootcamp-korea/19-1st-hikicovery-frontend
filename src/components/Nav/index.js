import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import styled, { css } from 'styled-components';
import CategoryItem from './CategoryItem';
import { CATEGORY_LIST } from './mockData';

const Nav = ({
  isSearchIcon,
  viewIdNumber,
  handleOnChangeFocus,
  getListIdNumber,
}) => {
  return (
    <NavWrap>
      <NavImgBox>
        <Link to="/">
          <img
            src="https://static.discovery-expedition.com/pc/static/images/common/logo.png"
            alt="메인로고"
          />
        </Link>
      </NavImgBox>
      <NavSearchBox>
        <SearchButton isSearchIcon={isSearchIcon}>
          <FaSearch></FaSearch>
        </SearchButton>
        <SearchInputBox
          onFocus={handleOnChangeFocus}
          onBlur={handleOnChangeFocus}
        >
          <input placeholder="search" />
        </SearchInputBox>
      </NavSearchBox>
      <UnderBar />

      {CATEGORY_LIST.map((category, index) => {
        return (
          <CategoryList key={index}>
            <Link
              onClick={() => {
                getListIdNumber(index);
              }}
              to={`/${category.category}`}
            >
              {category.category}
            </Link>
            {viewIdNumber === index && (
              <CategoryItem category={category.subCategoryList} />
            )}
          </CategoryList>
        );
      })}
    </NavWrap>
  );
};

const NavWrap = styled.nav`
  position: fixed;
  top: 30px;
  left: 30px;
  width: 180px;
  z-index: 10;
`;

const UnderBar = styled.div`
  margin: 0 10px 15px 10px;
  height: 3px;
  background: black;
`;

const NavSearchBox = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px 10px;
`;

const NavImgBox = styled(NavSearchBox)`
  margin: 15px 0;
  height: 34px;
`;

const SearchButton = styled.button`
  display: block;
  ${props =>
    props.isSearchIcon &&
    css`
      display: none;
    `}
  width: 30px;
  background-color: transparent;
`;

const SearchInputBox = styled.div`
  display: flex;
  input {
    padding: 10px;
    height: 100%;
    width: 150px;
    background-color: transparent;
  }
`;

const CategoryList = styled.li`
  padding: 0 10px;
  margin: 7.5px 0;
  font-style: italic;
`;

export default Nav;
