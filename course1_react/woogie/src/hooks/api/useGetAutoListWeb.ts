import axios from 'axios'
import { useEffect, useState } from 'react'

const axiosKaKaoApi = axios.create({
  baseURL: process.env.REACT_APP_KAKAO_WEB_SEARCH_API,
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_WEB_SEARCH_API_KEY}`,
  },
})

export const useGetAutoListWeb = (debounceSearchQuery: string) => {
  const [autoList, setAutoList] = useState<KakaoWebSearchType>()
  const handleAutoListItem = () => {
    console.log(1)
    setAutoList(undefined)
  }

  useEffect(() => {
    async function fetchKakaoWeb(query: string) {
      try {
        const { data } = await axiosKaKaoApi.get<KakaoWebSearchType>(`&query=${query}`)
        setAutoList(data)
      } catch (error) {
        console.error('Error fetching data:', error)
        throw error
      }
    }

    if (debounceSearchQuery !== '') {
      fetchKakaoWeb(debounceSearchQuery)
    }
  }, [debounceSearchQuery])

  return {
    autoList,
    setAutoList,
    handleAutoListItem,
  }
}
