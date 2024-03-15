import { Link, useNavigate } from "react-router-dom";
import styled, { css } from "styled-components";
import { Flex } from "../shared";
import deleteTags from "../../utils/deleteTags";
import { useSuspenseQuery } from "@tanstack/react-query";
import { getRecommendKeywords } from "../../apis/kakao";
import withSuspense from "../../hooks/withSuspense";
import { MouseEvent, useEffect, useRef } from "react";

interface AutoSearchProps {
  hidden: boolean;
  debouncedQuery: string;
  onClick: (keyword: string) => void;
  onClose: () => void;
  onMouseDown?: (e: MouseEvent<HTMLDivElement>) => void;
}

const AutoSearch = ({
  hidden,
  debouncedQuery,
  onClick,
  onClose,
  onMouseDown,
}: AutoSearchProps) => {
  const searchRef = useRef<HTMLDivElement | null>(null);
  const { data } = useSuspenseQuery({
    queryKey: ["recommendKeyword", debouncedQuery],
    queryFn: () => getRecommendKeywords({ query: debouncedQuery }),
  });
  const searchHidden = debouncedQuery ? hidden : true;

  return (
    <Container hidden={searchHidden} ref={searchRef}>
      {data?.map((data, index) => (
        <Flex
          key={index}
          $justify="space-between"
          $align="center"
          style={{
            padding: 10,
            borderBottom: "1px solid black",
            gap: 40,
          }}
          onMouseDown={onMouseDown}
        >
          <p style={{ flex: 1 }} onClick={() => onClick(data.title)}>
            {deleteTags(data.title)}
          </p>
          <Link to={data.url}>바로가기</Link>
        </Flex>
      ))}
    </Container>
  );
};

const Container = styled.div<{ hidden: boolean }>(
  {
    border: "1px solid black",
    borderTop: "none",
    backgroundColor: "white",
    width: "100%",

    position: "absolute",
    top: "45px",
  },
  ({ hidden }) =>
    hidden
      ? css`
          display: hidden;
        `
      : null
);
export default withSuspense(AutoSearch, { fallback: <div>로딩중</div> });
