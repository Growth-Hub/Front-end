import { Flex, ItemList, Pagination } from "./components/shared";
import Spacing from "./components/shared/Spacing";

function App() {
  return (
    <Flex direction="column" $align="center">
      <ItemList />
      <Spacing size={80} />
      <Spacing
        size={2}
        $backgroundcolor="lightgray"
        style={{ width: "100%" }}
      />
      <Spacing size={80} />
      <Pagination limit={101} />
    </Flex>
  );
}

export default App;
