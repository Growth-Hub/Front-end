import { PropsWithChildren } from "react";
import PageContextProvider from "./PageContext";
import SearchQeuryContextProvider from "./SearchQueryContetxt";

const TotalContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <SearchQeuryContextProvider>
      <PageContextProvider>{children}</PageContextProvider>
    </SearchQeuryContextProvider>
  );
};

export default TotalContextProvider;
