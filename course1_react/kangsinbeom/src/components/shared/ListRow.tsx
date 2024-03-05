import { Flex, Spacing, Text } from ".";
import { Link } from "react-router-dom";

interface ListRowProps {
  left?: React.ReactNode;
  contents: React.ReactNode;
  onClick?: () => void;
  as?: "div" | "li";
}

const ListRow = ({ left, contents, as = "li" }: ListRowProps) => {
  return (
    <Flex as={as} style={listRowContainerStyles}>
      <Flex>{left}</Flex>
      <Flex style={listRowContentsStyles}>{contents}</Flex>
    </Flex>
  );
};

const listRowContainerStyles = {
  padding: "10px 0",
  cursor: "pointer",
};

const listRowContentsStyles = {
  flex: 1,
};

const ListRowCategorys = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link to={to}>
      <Flex $align="center">
        <Spacing size={12} direction="horizontal" />
        <Text>{text}</Text>
      </Flex>
    </Link>
  );
};

ListRow.Category = ListRowCategorys;

export default ListRow;
