import styled, { keyframes } from "styled-components";
import Grid from "./Grid";

const opacity = keyframes`
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
  100% {
    opacity: 1;
  }
`;

const ListSkeleton = () => {
  const test = Array(10).fill(0);
  return (
    <Grid $coulmn="repeat(5, 1fr)" style={{ gap: 20 }}>
      {test.map((_, index) => (
        <Skeleton key={index} width={220} height={300} />
      ))}
    </Grid>
  );
};

const Skeleton = styled.div<{ width: number; height: number }>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background-color: gray;
  animation: ${opacity} 1s ease-in-out 0.1s infinite;
`;

export default ListSkeleton;
