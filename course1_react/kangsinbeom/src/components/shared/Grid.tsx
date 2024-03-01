import { CSSProperties } from "react";
import styled from "styled-components";

interface GridProps {
  $coulmn?: CSSProperties["gridTemplateColumns"];
  row?: CSSProperties["gridTemplateRows"];
}

const Grid = styled.div<GridProps>(({ $coulmn, row }) => ({
  display: "grid",
  girdGap: "10px",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gridAutoRows: "10px",
  gridTemplateRows: row,
}));

export default Grid;
