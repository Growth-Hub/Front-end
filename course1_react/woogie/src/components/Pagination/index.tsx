import React, { useEffect } from 'react'
import { usePageContext } from '@contexts/PageContext'
import { usePageMoveBtn } from '@hooks/usePageMoveBtn'
import * as S from '@styles/components/Pagination'
import { MAX_PAGE_COUNT, START_PAGE_COUNT } from '@utils/Constants'
import PageBtnList from './PageBtnList'

function Pagination() {
  const { currentPage } = usePageContext()
  const { handleMovePage } = usePageMoveBtn()

  useEffect(() => {
    sessionStorage.setItem('currentPage', JSON.stringify(currentPage))
  }, [currentPage])

  return (
    <S.PaginationContainer
      $btnprevdisabled={currentPage <= START_PAGE_COUNT}
      $btnnextdisabled={currentPage >= MAX_PAGE_COUNT}
    >
      <button disabled={currentPage <= START_PAGE_COUNT} type="button" onClick={() => handleMovePage('prev')}>
        이전
      </button>
      <PageBtnList />
      <button disabled={currentPage >= MAX_PAGE_COUNT} type="button" onClick={() => handleMovePage('next')}>
        다음
      </button>
    </S.PaginationContainer>
  )
}

export default Pagination
