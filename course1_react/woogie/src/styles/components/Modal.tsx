import styled from 'styled-components'

export const Backdrop = styled.div`
  position: absolute;
  top: 0;
  background-color: #8b8b8ba0;
  width: 100%;
  height: 100%;
  z-index: 1;
`

export const ModalWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`

export const ModalImage = styled.div`
  width: 50%;
  height: 50%;

  z-index: 2;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }
`
