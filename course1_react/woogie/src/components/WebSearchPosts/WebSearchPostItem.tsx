import React, { forwardRef } from 'react'
import * as S from '@styles/components/WebSearchPosts'
import { Link } from 'react-router-dom'

type Props = {
  searchItem: KakaoWebDocType
}

export default forwardRef<HTMLDivElement, Props>(function WebSearchPostItem({ searchItem }, ref) {
  return (
    <S.WebSearchPostItem ref={ref}>
      <Link to={searchItem.url}>
        <p>{searchItem.title.replace(/(<([^>]+)>)/gi, '')}</p>
        <p> {searchItem.contents.replace(/(<([^>]+)>)/gi, '')}</p>
      </Link>
    </S.WebSearchPostItem>
  )
})
