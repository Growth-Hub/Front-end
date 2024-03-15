import { PropsWithChildren, createContext, useContext, useState } from "react";
import { Portal } from "../components/shared";
import AuthForm from "../components/auth/AuthForm";

interface ModalContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);

const ModalContextProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
      {isOpen && <Portal content={<AuthForm />} />}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;

export const useModalContext = () => {
  const context = useContext(ModalContext);

  if (context == null) {
    throw new Error("use in Context");
  }
  return context;
};
