import styled from "styled-components";

interface SpacingProps {
  $backgroundcolor?: string;
  size: number;
  direction?: "vertical" | "horizontal";
}

const Spacing = styled.div<SpacingProps>`
  ${({ size, direction = "vertical" }) =>
    direction === "vertical" ? `height: ${size}px;` : `width: ${size}px;`}
  ${({ $backgroundcolor }) =>
    $backgroundcolor && `background-color: ${$backgroundcolor};`}
`;
export default Spacing;
