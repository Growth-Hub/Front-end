import { usePageContext } from '@contexts/PageContext'
import { useSuspenseQuery } from '@tanstack/react-query'
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

export const useGetAnimalPicture = () => {
  const { currentPage } = usePageContext()
  const { data } = useSuspenseQuery({
    queryKey: ['animalPicture', currentPage],
    queryFn: () => fetchAnimalPost(currentPage),
    staleTime: 4 * (1000 * 60),
    retry: 0,
  })

  return data
}
