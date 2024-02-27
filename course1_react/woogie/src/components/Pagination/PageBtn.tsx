import { usePageContext } from '@contexts/PageContext'
import React, { MouseEventHandler } from 'react'
import * as S from '@styles/components/Pagination'

type Props = {
  visiblePageBtnNum: number
}

export default function PageBtn({ visiblePageBtnNum }: Props) {
  const { currentPage, setCurrentPage } = usePageContext()
  const handlePageBtn: MouseEventHandler = e => {
    const target = e.target as HTMLLIElement
    const targetValue = Number.parseInt(target.textContent as string, 10)
    setCurrentPage(targetValue)
  }

  return (
    <S.PageBtnItem $active={currentPage === visiblePageBtnNum} onClick={handlePageBtn}>
      {visiblePageBtnNum}
    </S.PageBtnItem>
  )
}
