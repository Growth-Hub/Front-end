import React, {useState, useEffect} from 'react';
import styled from "styled-components";
import { useLocation } from "react-router-dom"; // useLocation을 import합니다.
import SearchWeb from '../pages/search/SearchWeb';
import { InputBox } from '../styles/Search';
import Categories from './Categories';

const SearchBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 15px;
  left: 180px;
`;

const CategoriesContainer = styled.div`
  margin-top: 20px; 
`;


export default function Search() {
  const location = useLocation(); 
  const path = location.pathname; 
  const [isCategoriesVisible, setIsCategoriesVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsCategoriesVisible(currentScrollY < 50); // Adjust the value as needed
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const renderContent = () => {
    if (path.startsWith('/web')) {
      return <SearchWeb />;
    }
    else if (path.startsWith('/cat')) {
      return <InputBox />;
    }
    switch (path) {
      case '/video':
        return <InputBox />;
      case '/blog':
        return <InputBox />;
      case '/book':
        return <InputBox />;
      case '/cafe':
        return <InputBox />;
      case '/image':
        return <InputBox />;
      default:
        return <InputBox />;
    }
  };

  return (
    <SearchBox>
      {renderContent()}
      <CategoriesContainer>
        {isCategoriesVisible && <Categories />}
      </CategoriesContainer>
    </SearchBox>
  );
}
