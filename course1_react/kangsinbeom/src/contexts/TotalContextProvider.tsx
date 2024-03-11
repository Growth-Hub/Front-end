import { PropsWithChildren } from "react";
import PageContextProvider from "./PageContext";

const TotalContextProvider = ({ children }: PropsWithChildren) => {
  return <PageContextProvider>{children}</PageContextProvider>;
};

export default TotalContextProvider;
