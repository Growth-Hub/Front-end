import { useGetInfiniteWeb } from '@hooks/api/useGetIinfiniteWeb'
import React from 'react'
import * as S from '@styles/components/WebSearchPosts'
import WebSearchPostItem from './WebSearchPostItem'

type Props = {
  searchQuery: string
}

export default function WebSearchPosts({ searchQuery }: Props) {
  const { data, observerElem } = useGetInfiniteWeb(searchQuery)

  return (
    <S.WebSearchPostWrapper>
      {data &&
        data.pages.map((searchItem, index) => (
          <WebSearchPostItem
            ref={index === data.pages.length - 1 ? observerElem : null}
            key={searchItem.title}
            searchItem={searchItem}
          />
        ))}
    </S.WebSearchPostWrapper>
  )
}
