import { createContext, useContext, useState } from "react";

interface PageContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<PageContextType | undefined>(undefined);

const SearchQeuryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  return (
    <Context.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </Context.Provider>
  );
};

export default SearchQeuryContextProvider;

export const useSearchQueryContext = () => {
  const context = useContext(Context);

  if (context == null) {
    throw new Error("use in alertContext");
  }
  return context;
};
