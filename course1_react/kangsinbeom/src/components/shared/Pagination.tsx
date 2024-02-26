import styled from "styled-components";
import Icon from "./Icon";
import useGetPages from "../../hooks/useGetPages";
import Spacing from "./Spacing";

const Pagination = ({ limit }: { limit: number }) => {
  const { selectedPage, moveToPage, pageArray } = useGetPages(limit);

  return (
    <Container>
      <Icon iconName="double" onClick={() => moveToPage("first")} />
      <Spacing size={10} direction="horizontal" />
      <Icon iconName="single" onClick={() => moveToPage("minus")} />
      <Spacing size={20} direction="horizontal" />
      {pageArray.map((page) => (
        <Icon
          iconName="page"
          selectedPage={selectedPage}
          key={page}
          onClick={() => moveToPage(page)}
        >
          {page}
        </Icon>
      ))}
      <Spacing size={20} direction="horizontal" />
      <Icon
        iconName="single"
        isReverse={true}
        onClick={() => moveToPage("plus")}
      />
      <Spacing size={10} direction="horizontal" />
      <Icon
        iconName="double"
        isReverse={true}
        onClick={() => moveToPage("last")}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
`;

export default Pagination;
