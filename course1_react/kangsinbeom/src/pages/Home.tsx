import Header from "../components/layout/Header";
import { Flex, ItemList } from "../components/shared";

const HomePage = () => {
  return (
    <Flex $direction="column">
      <Header />
      <ItemList />
    </Flex>
  );
};

export default HomePage;
