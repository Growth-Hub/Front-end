import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCallback, useEffect, useRef } from 'react'

const axiosKaKaoApi = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_WEB_SEARCH_API,
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_WEB_SEARCH_API_KEY}`,
  },
})

const fetchKaKaoWeb = async (page: number, query: string) => {
  const { data } = await axiosKaKaoApi.get<KakaoWebSearchType>(`&page=${page}&query=${query}`)
  return data
}

export const useGetInfiniteWeb = (query: string) => {
  const observerElem = useRef<HTMLDivElement>(null)

  const { data, refetch, isLoading, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: ['kakaoWeb'],
    queryFn: ({ pageParam }) => fetchKaKaoWeb(pageParam, query),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (!lastPage.meta.is_end) {
        return lastPageParam + 1
      }
      return undefined
    },
    select: data => ({
      pageParams: data.pageParams,
      pages: data.pages.flatMap(docItem => docItem.documents),
    }),
  })

  const handleObserver: IntersectionObserverCallback = useCallback(
    entries => {
      const [target] = entries

      if (target.isIntersecting && hasNextPage) {
        fetchNextPage()
      }
    },
    [fetchNextPage, hasNextPage],
  )

  useEffect(() => {
    const element = observerElem.current

    const option = {
      root: null,
      rootMargin: '0px',
      threshold: 1,
    }

    const observer = new IntersectionObserver(handleObserver, option)
    if (element) observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  })

  useEffect(() => {
    refetch()
  }, [query, refetch])

  return {
    data,
    isLoading,
    observerElem,
  }
}
