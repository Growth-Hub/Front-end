import { usePageContext } from '@contexts/PageContext'
import { VISIBLE_PAGE_BUTTONS_NUMBER } from '@utils/Constants'

type BtnClickType = 'prev' | 'next'

export const usePageMoveBtn = () => {
  const { currentPage, setCurrentPage, setPrevPageSection, setNextPageSection } = usePageContext()
  const handleMovePage = (btnClick: BtnClickType) => {
    if (btnClick === 'next') {
      setCurrentPage(pre => pre + 1)
    }

    if (btnClick === 'prev') {
      setCurrentPage(pre => pre - 1)
    }

    if (btnClick === 'next' && currentPage % VISIBLE_PAGE_BUTTONS_NUMBER === 0) {
      setNextPageSection(true)
    }

    if (btnClick === 'prev' && currentPage % VISIBLE_PAGE_BUTTONS_NUMBER === 1) {
      setPrevPageSection(true)
    }
  }

  return { handleMovePage }
}
