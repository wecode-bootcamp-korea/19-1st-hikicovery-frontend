import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CategoryItem = ({ category }) => {
  return (
    <ul>
      {category.map((list, index) => {
        return (
          <CategoryBox key={index}>
            <Category to="">{list.subCategory}</Category>
          </CategoryBox>
        );
      })}
    </ul>
  );
};

const CategoryBox = styled.li`
  display: flex;
  flex-direction: column;
  font-style: normal;
  margin-left: 10px;
`;

const Category = styled(Link)`
  font-size: 12px;
  &:hover {
    transform: scale(1.1);
  }
`;

export default CategoryItem;
