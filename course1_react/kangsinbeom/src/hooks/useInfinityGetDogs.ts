import {
  useQueryClient,
  useSuspenseInfiniteQuery,
} from "@tanstack/react-query";
import { getDogs } from "../apis/dogs";
import { Dog } from "../constant/dog";
import { useEffect } from "react";

const useInfinityGetDogs = () => {
  const queryClient = useQueryClient();
  const { data, fetchNextPage, hasNextPage, isFetching } =
    useSuspenseInfiniteQuery({
      queryKey: ["infinityDogs"],
      queryFn: async ({ pageParam }) => await getDogs({ pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        if (allPages.length > 5) return null;
        return allPages.length + 1;
      },
      select: (data) => ({
        pageParams: data.pageParams,
        pages: data.pages.flat(),
      }),
      staleTime: 60 * 1_000,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    });

  useEffect(() => {
    (async () => {
      const getStorage = sessionStorage.getItem("savedScrollData");
      if (!getStorage) return;
      const { lastPicture } = JSON.parse(getStorage as string);
      const newLimit = Math.ceil(lastPicture / Dog.LIMIT) * Dog.LIMIT;
    })();

    queryClient.prefetchInfiniteQuery({
      queryKey: ["infinityDogs", { pageParam: data.pageParams[0] + 1 }],
      queryFn: ({ pageParam }) => getDogs({ pageParam }),
      initialPageParam: 1,
    });
  }, [data.pageParams, queryClient]);
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
  };
};

export default useInfinityGetDogs;
