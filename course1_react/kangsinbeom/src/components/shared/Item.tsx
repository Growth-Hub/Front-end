import Flex from "./Flex";
import Text from "./Text";
import Spacing from "./Spacing";
import { Breed } from "../../models/dog";
import { forwardRef } from "react";
import getSpan from "../../utils/getSpan";
import styled from "styled-components";
interface ItemProps {
  url: string;
  breeds: Breed[];
  index: number;
  width: number;
  height: number;
  onClick: (index: number) => void;
}
const Item = forwardRef(
  (
    { url, breeds, onClick, index, height, width }: ItemProps,
    ref: React.Ref<HTMLParagraphElement>
  ) => {
    const data = breeds != null ? breeds[0] : null;
    const photoSpan = getSpan({ width, height });
    return (
      <Flex
        $direction="column"
        onClick={() => onClick(index)}
        ref={ref}
        $photoSpan={photoSpan}
      >
        <StyledImage src={url as string} alt="" />
        <Spacing size={14} />
        <Flex $direction="column">
          <Text $bold={true}>{data?.name}</Text>
          <Text>{data?.bred_for}</Text>
        </Flex>
      </Flex>
    );
  }
);

const StyledImage = styled.img`
  border-radius: 20px;
  object-fit: cover;
  height: 100%;
  width: 100%;
`;
export default Item;
