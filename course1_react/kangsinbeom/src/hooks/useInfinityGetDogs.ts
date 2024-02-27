import {
  useQueryClient,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import { getDogs } from "../apis/dogs";

const useInfinityGetDogs = () => {
  const queryClient = useQueryClient();
  return useSuspenseInfiniteQuery({
    queryKey: ["infinityDogs"],
    queryFn: async ({ pageParam }) => getDogs(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.length + 1,
    staleTime: 60 * 1_000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useInfinityGetDogs;
