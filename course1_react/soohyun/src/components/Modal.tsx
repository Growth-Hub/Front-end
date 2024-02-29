import React, { ReactNode } from 'react'
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 15px;
`;

interface ModalProps {
  children: ReactNode;
  modalOpen: boolean;
  modalClose: () => void;
}

export default function Modal({ children, modalOpen, modalClose }: ModalProps) {
  if (!modalOpen) return null;

  return ReactDOM.createPortal(
    <ModalBack onClick={modalClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {children}
      </ModalContent>
    </ModalBack>,
    document.body
  );
};