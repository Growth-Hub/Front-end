import Header from "../components/layout/Header";
import { Flex, Spacing } from "../components/shared";
import SearchResult from "../components/search/SearchResult";
const SearchPage = () => {
  return (
    <Flex $direction="column" style={{ position: "relative" }}>
      <Header />
      <Spacing size={10} />
      <SearchResult />
    </Flex>
  );
};

export default SearchPage;
