import withSuspense from "../../hooks/withSuspense";
import ListSkeleton from "./ListSkeleton";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useInfinityGetDogs from "../../hooks/useInfinityGetDogs";
import Grid from "./Grid";
import Item from "./Item";

const ItemList = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetching } = useInfinityGetDogs();
  const saveScroll = (index: number) => {
    sessionStorage.setItem(
      "savedScrollData",
      JSON.stringify({
        scrollY: window.scrollY,
        lastPicture: index,
      })
    );
  };
  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [fetchNextPage, hasNextPage, inView]);
  useEffect(() => {
    const scrollY = sessionStorage.getItem("scrollY");
    window.scrollTo({ top: JSON.parse(scrollY as string) as number });
  }, []);
  return (
    <>
      <Grid style={{ gap: 20 }}>
        {data.pages.map(({ url, id, breeds, width, height }, index) => {
          if (data.pages.length === index + 1) {
            return (
              <Item
                url={url}
                width={width}
                height={height}
                key={`${id}${index}`}
                breeds={breeds}
                onClick={saveScroll}
                index={index + 1}
                ref={ref}
              />
            );
          }
          return (
            <Item
              url={url}
              width={width}
              height={height}
              key={`${id}${index}`}
              breeds={breeds}
              onClick={saveScroll}
              index={index + 1}
            />
          );
        })}
        {isFetching && <ListSkeleton />}
      </Grid>
    </>
  );
};

export default withSuspense(ItemList, { fallback: <ListSkeleton /> });
