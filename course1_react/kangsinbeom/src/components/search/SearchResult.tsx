import { useInView } from "react-intersection-observer";
import { Flex } from "../shared";
import SearchItem from "./SearchItem";
import { useLocation } from "react-router-dom";
import useInfinityGetKakao from "../../hooks/useInfinityGetKakao";
import { useEffect } from "react";
import withSuspense from "../../hooks/withSuspense";

const SearchResult = () => {
  const { ref, inView } = useInView();
  const { search } = useLocation();
  const getSearchTermFromQueryString = (queryString: any) => {
    return new URLSearchParams(queryString).get("query") || "";
  };

  const { data, fetchNextPage } = useInfinityGetKakao({
    query: getSearchTermFromQueryString(search),
  });
  const isRef = ({
    totalLength,
    index,
  }: {
    totalLength: number;
    index: number;
  }) => {
    return totalLength - 5 === index ? true : false;
  };

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [fetchNextPage, inView]);
  return (
    <Flex $direction="column" style={{ gap: 20, padding: "0 20px" }}>
      {data.pages.map((document, index) => {
        if (isRef({ totalLength: data.pages.length, index }))
          return <SearchItem key={index} document={document} ref={ref} />;
        return <SearchItem key={index} document={document} />;
      })}
    </Flex>
  );
};

export default withSuspense(SearchResult, { fallback: <div>로딩중</div> });
