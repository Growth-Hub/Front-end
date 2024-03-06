import styled from 'styled-components'

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
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
  & > input {
    border: none;
    margin: 0.5rem;
  }
`
