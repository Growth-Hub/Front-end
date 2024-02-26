import { CSSProperties } from "react";
import styled from "styled-components";

interface TextProps {
  color?: CSSProperties["color"];
  display?: CSSProperties["display"];
  fontWeight?: CSSProperties["fontWeight"];
  fontSize?: CSSProperties["fontSize"];
  bold?: boolean;
}
const Text = styled.span<TextProps>(
  ({ color = "black", display, fontSize, bold, fontWeight }) => ({
    color,
    display,
    fontSize,
    fontWeight: bold ? "bold" : fontWeight,
  })
);

export default Text;
