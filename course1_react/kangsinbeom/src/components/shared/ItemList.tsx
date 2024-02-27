import withSuspense from "../../hooks/withSuspense";
import ListSkeleton from "./ListSkeleton";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import useInfinityGetDogs from "../../hooks/useInfinityGetDogs";
import Grid from "./Grid";
import Item from "./Item";
import useSaveScroll from "../../hooks/useSaveScroll";

const ItemList = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage } = useInfinityGetDogs();
  useSaveScroll();
  useEffect(() => {
    if (inView) fetchNextPage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);
  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrollY");
    window.scrollTo({ top: JSON.parse(scrollY as string) as number });
  }, []);
  return (
    <Grid $coulmn="repeat(5, 1fr)" style={{ gap: 20 }}>
      {data.pages.flat().map(({ url, id, breeds }) => (
        <Item url={url} key={id} breeds={breeds} />
      ))}
      <div ref={ref}>나 보이면 inview</div>
    </Grid>
  );
};

export default withSuspense(ItemList, { fallback: <ListSkeleton /> });
