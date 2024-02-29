import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'

const axiosAnimalApi = axios.create({
  baseURL: process.env.REACT_APP_ANIMAL_API,
  headers: {
    'x-api-key': process.env.REACT_APP_ANIMAL_API_KEY,
  },
})

const fetchAnimalPost = async (currentPage: number) => {
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

export const useGetInfiniteAnimalVirtuoso = () => {
  const { data, fetchNextPage, isLoading } = useInfiniteQuery({
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

  return {
    data,
    isLoading,

    fetchNextPage,
  }
}
