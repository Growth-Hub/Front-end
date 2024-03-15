import { PropsWithChildren } from "react";
import PageContextProvider from "./PageContext";
import ModalContextProvider from "./ModalContext";
import AuthContextProvider from "./AuthContext";

const TotalContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <PageContextProvider>
      <ModalContextProvider>
        <AuthContextProvider>{children}</AuthContextProvider>
      </ModalContextProvider>
    </PageContextProvider>
  );
};

export default TotalContextProvider;
