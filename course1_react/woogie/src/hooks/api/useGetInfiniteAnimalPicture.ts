import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useCallback, useEffect, useRef } from 'react'

const axiosAnimalApi = axios.create({
  baseURL: process.env.REACT_APP_ANIMAL_API,
  headers: {
    'x-api-key': process.env.REACT_APP_ANIMAL_API_KEY,
  },
})

export const fetchAnimalPost = async (currentPage: number) => {
  const { data } = await axiosAnimalApi.get<AnimalPostType[]>(`${currentPage}`)
  const postsUrls = data.map(post => {
    return new Promise((res, rej) => {
      const image = new Image()
      image.src = post.url
      image.onload = () => res(post.url)
      image.onerror = () => rej(post.url)
    })
  })

  await Promise.all(postsUrls)

  return data
}

export const useGetInfiniteAnimalPicture = () => {
  const observerElem = useRef<HTMLDivElement>(null)

  const { data, hasNextPage, fetchNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['animalPictureInfinite'],
    queryFn: ({ pageParam }) => fetchAnimalPost(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1
    },
    select: data => ({
      pages: data.pages.flatMap(page => page),
      pageParams: data.pageParams,
    }),
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
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

  return {
    data,
    isLoading,
    observerElem,
  }
}
