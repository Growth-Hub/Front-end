import React from 'react'
import styled from "styled-components";
import logo from '../assets/logo.svg';
import cat from '../assets/logo-cat.png';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 150px;
  right: 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  background-color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Cat = styled.img`
  height: 44PX;
`;


const Search = styled.div`
  width: 80%;
  height: 33px;
  border-radius: 20px;
  background-color: #D9D9D9;
  line-height: 33px;
  padding: 3px 0;

  & > p {
    margin-left: 30px;
}
`;

const Profile = styled.div`
  width: 33px;
  height: 33px;
  border-radius: 50px;
  background-color: black;
`;

export default function Header() {
  return (
    <StyledHeader>
      <LogoContainer>
        <Cat src={cat} alt="Logo-png" />
        <img src={logo} alt="Logo" />
      </LogoContainer>
      <Search>
        <p>검색</p>
      </Search>
      <Profile>

      </Profile>
    </StyledHeader>
  )
}
