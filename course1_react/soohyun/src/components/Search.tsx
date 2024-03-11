import React, {useState} from 'react'
import styled from "styled-components";
import { IoMdArrowDropdown } from "react-icons/io";
import SearchWeb from '../pages/search/SearchWeb';
import { InputBox } from '../styles/Search';

const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
`;

const Dropdown = styled.div`
  width: 190px;
  height: 60px;
  border-top-left-radius: 10px; 
  border-bottom-left-radius: 10px;
  background-color: #A0A0A0;
  line-height: 33px;
  color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const DropdownContent = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: absolute;
  background-color: #A0A0A0;
  width: 190px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  text-align: center;
  border-top-left-radius: 10px; 
`;

const CategoryItem = styled.div`
  padding: 18px;
  text-decoration: none;
  display: block;
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;

const categories = [
  '고양이',
  '웹문서',
  '동영상',
  '이미지',
  '블로그',
  '책',
  '카페'
];

export default function Search() {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('고양이');
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setOpen(false);
  };

  return (
    <SearchBox>
      <Dropdown>
        <IoMdArrowDropdown onClick={() => setOpen(!open)} style={{cursor: 'pointer'}}/>
        {selectedCategory}
      </Dropdown>
      <DropdownContent open={open}>
        {categories.map((category, index) => (
          <CategoryItem key={index} onClick={() => handleCategoryChange(category)}>
            {category}
          </CategoryItem>
        ))}
      </DropdownContent>
      {selectedCategory === '웹문서' && <SearchWeb />}

      {/* 변경 예정 */}
      {selectedCategory === '고양이' && <InputBox /> }
      {selectedCategory === '동영상' && <InputBox />}
      {selectedCategory === '블로그' && <InputBox />}
      {selectedCategory === '책' && <InputBox />}
      {selectedCategory === '카페' && <InputBox />}
      {selectedCategory === '이미지' && <InputBox />}
    </SearchBox>
  )
}
