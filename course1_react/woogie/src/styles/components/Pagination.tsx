import styled from 'styled-components'

export const PaginationContainer = styled.div<{ $btnprevdisabled: boolean; $btnnextdisabled: boolean }>`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  gap: 3rem;

  & button {
    background-color: #4ca6ff;
    color: white;
    font-weight: bold;
    padding: 0.5rem 1rem;
    border-radius: 0.2rem;
  }

  & button:first-child {
    background-color: ${props => (props.$btnprevdisabled ? '#8290a0' : '#4ca6ff')};
  }

  & button:last-child {
    background-color: ${props => (props.$btnnextdisabled ? '#8290a0' : '#4ca6ff')};
  }
`

export const PageListWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
`

export const PageBtnItem = styled.li<{ $active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.$active ? '#4ca6ff' : '')};
  color: ${props => (props.$active ? 'white' : '#c6c9e1')};
  font-weight: bold;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
`
