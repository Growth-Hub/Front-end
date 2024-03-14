import React from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const CategoriesContainer = styled.div`
  
  display: flex;
  padding: 10px 0;
`;

const Category = styled.div<{isActive: boolean}>`
  display: flex;
  margin: 0 15px;
  cursor: pointer;
  padding: 7px 15px;
  border-bottom: ${props => props.isActive ? `4px solid ${props.theme.colors.primary}` : 'none'};

`;

const categories = [
  { name: '고양이', path: '/cat' },
  { name: '웹문서', path: '/web/search' },
  { name: '동영상', path: '/video' },
  { name: '이미지', path: '/image' },
  { name: '블로그', path: '/blog' },
  { name: '책', path: '/book' },
  { name: '카페', path: '/cafe' },
];

const Categories = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleCategoryClick = (path: string) => {
    navigate(path);
  };

  return (
    <CategoriesContainer>
      {categories.map((category, index) => (
        <Category 
        key={index} 
        onClick={() => handleCategoryClick(category.path)}
        isActive={pathname === category.path}>
          {category.name}
        </Category>
      ))}
    </CategoriesContainer>
  );
};

export default Categories;

