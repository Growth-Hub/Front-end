import { usePageContext } from '@contexts/PageContext'
import { useEffect, useState } from 'react'
import { MAX_PAGE_COUNT, VISIBLE_PAGE_BUTTONS_NUMBER } from '@utils/Constants'

const visiblePageHandler = (currentPage: number): number[] => {
  const allPageBtns = Array.from({ length: MAX_PAGE_COUNT }, (_, i) => i + 1)
  const currentPageReminder = currentPage % VISIBLE_PAGE_BUTTONS_NUMBER
  const visiblePageStart: number =
    currentPageReminder === 0 ? currentPage - VISIBLE_PAGE_BUTTONS_NUMBER : currentPage - currentPageReminder
  const visiblePageEnd = visiblePageStart + VISIBLE_PAGE_BUTTONS_NUMBER

  if (visiblePageEnd > MAX_PAGE_COUNT) {
    allPageBtns.slice(visiblePageStart, MAX_PAGE_COUNT)
  }

  return allPageBtns.slice(visiblePageStart, visiblePageEnd)
}

export const useGetPageSection = () => {
  const { currentPage, nextPageSection, setNextPageSection, prevPageSection, setPrevPageSection } = usePageContext()
  const [visiblePageBtnSection, setVisiblePageBtnSection] = useState<number[]>(() => {
    const visiblePageArr = visiblePageHandler(currentPage)

    return visiblePageArr
  })

  useEffect(() => {
    if (nextPageSection) {
      const visiblePageArr = visiblePageHandler(currentPage)
      setVisiblePageBtnSection(visiblePageArr)
      setNextPageSection(false)
    }

    if (prevPageSection) {
      const visiblePageArr = visiblePageHandler(currentPage)
      setVisiblePageBtnSection(visiblePageArr)
      setPrevPageSection(false)
    }
  }, [currentPage, nextPageSection, prevPageSection, setNextPageSection, setPrevPageSection])

  return visiblePageBtnSection
}
