import Header from "../components/layout/Header";
import { Flex } from "../components/shared";
import useInfinityGetKakao from "../hooks/useInfinityGetKakao";
import withSuspense from "../hooks/withSuspense";
import ListRow from "../components/shared/ListRow";
import { KeyboardEvent } from "react";
import { useSearchQueryContext } from "../contexts/SearchQueryContetxt";
const SearchPage = () => {
  const { searchQuery: query } = useSearchQueryContext();
  const { data, fetchNextPage } = useInfinityGetKakao({ query });
  const onChage = () => {
    fetchNextPage();
  };
  const handleSearchInput = (e: KeyboardEvent<HTMLInputElement>) => {
    console.log(e.target);
  };
  console.log(data.pages);
  return (
    <Flex $direction="column">
      <Header />
      <Flex $direction="column">
        {data.pages.map(({ contents, title, url }, index) => (
          <ListRow key={index} contents={contents} left={title} />
        ))}
      </Flex>
      <div onClick={onChage}>Next</div>
    </Flex>
  );
};

export default withSuspense(SearchPage, { fallback: <div>loading</div> });
