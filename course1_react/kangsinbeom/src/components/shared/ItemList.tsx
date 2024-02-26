import Item from "./Item";
import Grid from "./Grid";
import useGetDogs from "../../hooks/useGetDogs";
import withSuspense from "../../hooks/withSuspense";
import ListSkeleton from "./ListSkeleton";

const ItemList = () => {
  const { data } = useGetDogs();

  return (
    <Grid $coulmn="repeat(5, 1fr)" style={{ gap: 20 }}>
      {data.map(({ url, id }) => (
        <Item url={url} key={id} />
      ))}
    </Grid>
  );
};

export default withSuspense(ItemList, { fallback: <ListSkeleton /> });
