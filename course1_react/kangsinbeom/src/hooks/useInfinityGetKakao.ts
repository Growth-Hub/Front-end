import { useSuspenseInfiniteQuery } from "@tanstack/react-query";
import { getKakao } from "../apis/kakao";

const useInfinityGetKakao = ({ query }: { query: string }) => {
  return useSuspenseInfiniteQuery({
    queryKey: ["infinitySearch", query],
    queryFn: ({ pageParam }) => getKakao({ pageParam, query }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastpageParam) => {
      return lastpageParam + 1;
    },
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages.flat(),
    }),
    staleTime: 60 * 1_000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};

export default useInfinityGetKakao;
