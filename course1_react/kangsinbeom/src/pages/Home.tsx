import Header from "../components/layout/Header";
import { Flex, ItemList } from "../components/shared";

const HomePage = () => {
  return (
    <Flex $direction="column">
      <Header
        left={<Header.Left />}
        content={<Header.Content />}
        right={<Header.Right />}
      />
      <ItemList />
    </Flex>
  );
};

export default HomePage;
