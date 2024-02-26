import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { getDogs } from "../apis/dogs";
import { usePageContext } from "../contexts/PageContext";

const useGetDogs = () => {
  const { selectedPage } = usePageContext();
  const queryClient = useQueryClient();
  return useSuspenseQuery({
    queryKey: ["dogs", selectedPage],
    queryFn: () => {
      queryClient.prefetchQuery({
        queryKey: ["dogs", selectedPage + 1],
        queryFn: () => getDogs(selectedPage + 1),
      });
      return getDogs(selectedPage);
    },
    staleTime: 60 * 1_000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useGetDogs;
