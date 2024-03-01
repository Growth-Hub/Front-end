import { CSSProperties } from "react";
import styled from "styled-components";

interface FlexProps {
  $align?: CSSProperties["alignItems"];
  $justify?: CSSProperties["justifyContent"];
  $direction?: CSSProperties["flexDirection"];
  $photoSpan?: number;
}

const Flex = styled.div<FlexProps>(
  ({ $align, $justify, $direction, $photoSpan }) => ({
    display: "flex",
    alignItems: $align,
    justifyContent: $justify,
    flexDirection: $direction,
    gridRow: `span ${$photoSpan}` ?? undefined,
  })
);

export default Flex;
