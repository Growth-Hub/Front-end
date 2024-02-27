import { CSSProperties } from "react";
import styled from "styled-components";

interface GridProps {
  $coulmn?: CSSProperties["gridTemplateColumns"];
  row?: CSSProperties["gridTemplateRows"];
}

const Grid = styled.div<GridProps>(({ $coulmn, row }) => ({
  display: "grid",
  gridTemplateColumns: $coulmn,
  gridTemplateRows: row,
}));

export default Grid;
