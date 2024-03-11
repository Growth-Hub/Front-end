import styled from 'styled-components'

export const WebSearchPostWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  padding: 3rem;
`

export const WebSearchPostItem = styled.div`
  width: 18rem;
  color: #3f3a55;
  overflow: scroll;
  margin-bottom: 2rem;
  padding: 2rem;
  background-color: #c0bbda;
  border-radius: 2rem;
  cursor: pointer;
  transition: all ease-in 200ms;

  & > a :first-child {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }

  &:hover {
    background-color: #816ee0;
    color: white;
  }
`
