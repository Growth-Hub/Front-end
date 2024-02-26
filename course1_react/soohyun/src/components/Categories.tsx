import React from 'react'
import styled from 'styled-components';

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  font-size: 30px;
  font-weight: bold;
  border-bottom: 1px solid black;
  margin-bottom: 25px;
`;

export default function Categories() {
  return (
    <CategoryContainer>
      All
    </CategoryContainer>
  )
}
