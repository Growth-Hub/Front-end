import styled from 'styled-components'

export const NavContainer = styled.nav`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem;
  height: 5rem;
`
export const NavSearchWrapper = styled.div`
  border: 2px solid #9f91e9;
  border-radius: 2rem;
  padding: 0 0.5rem;

  & > svg {
    cursor: pointer;
    color: #9f91e9;
  }
  & > div input {
    border: none;
    margin: 0.5rem;
  }

  & > div {
    display: inline-block;
  }
`
export const SearchInputAutoList = styled.ul`
  width: 20rem;
  height: 30rem;
  border-radius: 2rem;
  background-color: #ece9fb;
  position: absolute;
  top: 100%;
  right: 2%;
  overflow: scroll;

  & > a > li {
    cursor: pointer;
    border-bottom: 1px solid #a090e9;
    background-color: #ece9fb;
    padding: 1rem;
    &:hover {
      background-color: #c7bdf7;
    }
  }
`
export const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.3rem;
  background-color: #ece9fb;
  color: #8e8383;

  &:hover {
    color: black;
    background-color: #c7bdf7;
  }
`
