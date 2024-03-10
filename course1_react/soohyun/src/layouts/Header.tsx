import React from 'react'
import styled from "styled-components";
import Search from '../components/Search';

const StyledHeader = styled.header`
  position: relative;
  height: 100px;
  background-color: white;
  margin-bottom: 50px;
`;

const Profile = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 33px;
  height: 33px;
  border-radius: 50px;
  background-color: black;
`;

export default function Header() {
  return (
    <StyledHeader>
      <Profile />
      <Search />
    </StyledHeader>
  )
}
