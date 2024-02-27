import { useCallback, useEffect, useMemo } from "react";
import getCurrentPageArray from "../utils/getCurrentPageArray";
import { usePageContext } from "../contexts/PageContext";

type MoveToPageProps = number | "first" | "last" | "plus" | "minus";

const useGetPages = (limit: number) => {
  const { selectedPage, setSelectedPage } = usePageContext();

  const lastPage = useMemo(() => Math.ceil(limit / 10), [limit]);
  const array = Array.from({ length: lastPage }, (_, index) => index + 1);
  const pageArray = getCurrentPageArray(array, selectedPage);

  const moveToPage = useCallback(
    (input: MoveToPageProps) => {
      if (input === "last") {
        setSelectedPage(lastPage);
      } else if (input === "first") {
        setSelectedPage(1);
      } else if (input === "plus") {
        if (selectedPage >= lastPage) return setSelectedPage(lastPage);
        setSelectedPage((prev) => prev + 1);
      } else if (input === "minus") {
        if (selectedPage < 1) return setSelectedPage(1);
        setSelectedPage((prev) => prev - 1);
      } else {
        setSelectedPage(input);
      }
    },
    [lastPage, selectedPage, setSelectedPage]
  );
  useEffect(() => {
    sessionStorage.setItem("selectedPage", JSON.stringify(selectedPage));
  }, [selectedPage]);

  return { selectedPage, lastPage, moveToPage, pageArray } as {
    selectedPage: number;
    lastPage: number;
    moveToPage: (number: MoveToPageProps) => void;
    pageArray: number[];
  };
};

export default useGetPages;
