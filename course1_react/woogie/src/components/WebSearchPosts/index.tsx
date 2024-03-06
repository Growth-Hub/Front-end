import { useGetInfiniteWeb } from '@hooks/api/useGetIinfiniteWeb'
import React from 'react'
import WebSearchPostItem from './WebSearchPostItem'

type Props = {
  searchQuery: string
}

export default function WebSearchPosts({ searchQuery }: Props) {
  const searchData = useGetInfiniteWeb(searchQuery)

  return (
    <div>
      {searchData &&
        searchData.pages.map(searchItem => <WebSearchPostItem key={searchItem.title} searchItem={searchItem} />)}
    </div>
  )
}
