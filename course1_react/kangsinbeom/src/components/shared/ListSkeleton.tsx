import styled, { keyframes } from "styled-components";
import Grid from "./Grid";
import Flex from "./Flex";

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
  const photoSpan = 10;
  const test = Array(10).fill(0);
  return (
    <Grid style={{ gap: 20 }}>
      {test.map((_, index) => (
        <Flex $direction="column" $photoSpan={photoSpan} key={index}>
          <Skeleton />
        </Flex>
      ))}
    </Grid>
  );
};

const Skeleton = styled.div`
  height: 200px;
  width: 100%;
  background-color: gray;
  border-radius: 20px;
  animation: ${opacity} 1s ease-in-out 0.1s infinite;
`;

export default ListSkeleton;
