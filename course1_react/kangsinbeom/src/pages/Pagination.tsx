import { Flex, ItemList, Pagination, Spacing } from "../components/shared";

const PaginationPage = () => {
  return (
    <Flex $direction="column" $align="center">
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
};

export default PaginationPage;
