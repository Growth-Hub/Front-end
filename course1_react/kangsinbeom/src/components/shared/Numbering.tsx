import styled from "styled-components";

const Numbering = styled.div<{ selected?: boolean }>(({ selected }) => ({
  backgroundColor: selected ? "lightblue" : "none",
  color: selected ? "white" : "none",
  borderRadius: "100%",
  width: "30px",
  height: "30px",
  display: "grid",
  placeItems: "center",
  cursor: "pointer",
}));

export default Numbering;
