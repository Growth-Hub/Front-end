import { useGetPageSection } from '@hooks/useGetPageSection'
import * as S from '@styles/components/Pagination'
import PagesBtn from './PageBtn'

export default function PageBtnList() {
  const visiblePageBtnSection = useGetPageSection()

  return (
    <S.PageListWrapper>
      {visiblePageBtnSection.map(visiblePageBtn => (
        <PagesBtn key={visiblePageBtn} visiblePageBtnNum={visiblePageBtn} />
      ))}
    </S.PageListWrapper>
  )
}
