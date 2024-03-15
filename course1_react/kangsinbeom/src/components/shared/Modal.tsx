import styled from "styled-components";
import Dimmed from "./Dimmed";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { useModalContext } from "../../contexts/ModalContext";

interface ModalProps {
  title: React.ReactNode;
}

const Modal = ({ title, children }: PropsWithChildren<ModalProps>) => {
  const { setIsOpen } = useModalContext();
  return (
    <Dimmed>
      <ModalBody>
        <CancelIcon
          style={{ alignSelf: "flex-end" }}
          onClick={() => setIsOpen(false)}
        />
        <p>{title}</p>
        {children}
      </ModalBody>
    </Dimmed>
  );
};

const ModalBody = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: 11;
  transform: translate(-50%, -50%);
  width: 500px;
  height: fit-content;
  background-color: white;
  border-radius: 60px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
`;

const CancelIcon = ({
  style,
  onClick,
}: ButtonHTMLAttributes<HTMLOrSVGElement>) => {
  return (
    <svg
      style={style}
      onClick={onClick}
      className="feather feather-x"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  );
};

export default Modal;
