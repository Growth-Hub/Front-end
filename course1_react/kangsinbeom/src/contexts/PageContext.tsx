import { createContext, useContext, useState } from "react";

interface PageContextType {
  selectedPage: number;
  setSelectedPage: React.Dispatch<React.SetStateAction<number>>;
}

const Context = createContext<PageContextType | undefined>(undefined);

const PageContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedPage, setSelectedPage] = useState<number>(() => {
    const storedPage = sessionStorage.getItem("selectedPage");
    return storedPage ? JSON.parse(storedPage) : 1;
  });
  return (
    <Context.Provider value={{ selectedPage, setSelectedPage }}>
      {children}
    </Context.Provider>
  );
};

export default PageContextProvider;

export const usePageContext = () => {
  const context = useContext(Context);

  if (context == null) {
    throw new Error("use in alertContext");
  }
  return context;
};
