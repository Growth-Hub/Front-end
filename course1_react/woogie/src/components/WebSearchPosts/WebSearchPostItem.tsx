import React from 'react'
import * as S from '@styles/components/WebSearchPosts'

type Props = {
  searchItem: KakaoWebDocType
}

export default function WebSearchPostItem({ searchItem }: Props) {
  return (
    <S.WebSearchPostItem>
      <p>{searchItem.title.replace(/(<([^>]+)>)/gi, '')}</p>
      <p> {searchItem.contents.replace(/(<([^>]+)>)/gi, '')}</p>
    </S.WebSearchPostItem>
  )
}
