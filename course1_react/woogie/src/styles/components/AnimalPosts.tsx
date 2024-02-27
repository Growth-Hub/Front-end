import styled from 'styled-components'

export const AnimalPostGridContainer = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);
`

export const AnimalPostWrapper = styled.div`
  cursor: pointer;
  height: 10rem;
  img {
    border-radius: 2rem;
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`

export const AnimialPostSkeleton = styled.div`
  width: calc(85vw / 5);
  height: 100%;
  padding-top: 50%;
  border-radius: 2rem;
  background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0),
      rgba(237, 237, 237, 0.5) 50%,
      rgba(255, 255, 255, 0) 80%
    ),
    lightgray;
  background-repeat: repeat-y;
  background-size: 100px 500px;
  background-position: 0 0;
  animation: shine 1s infinite;
  @keyframes shine {
    to {
      background-position:
        100% 0,
        /* move highlight to right */ 0 0;
    }
  }
`
