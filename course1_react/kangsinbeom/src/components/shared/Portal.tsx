import { createPortal } from "react-dom";
import Modal from "./Modal";

const Portal = ({
  content,
  title,
}: {
  content: React.ReactNode;
  title?: React.ReactNode;
}) => {
  const modalPortal = document.getElementById("modal-portal") as HTMLElement;
  return (
    <>{createPortal(<Modal title={title}>{content}</Modal>, modalPortal)}</>
  );
};

export default Portal;
