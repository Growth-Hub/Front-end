/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react'

type PageContextType = {
  currentPage: number
  nextPageSection: boolean
  prevPageSection: boolean
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  setNextPageSection: React.Dispatch<React.SetStateAction<boolean>>
  setPrevPageSection: React.Dispatch<React.SetStateAction<boolean>>
}

export const PageContext = createContext<PageContextType | undefined>(undefined)

export default function PageContextProvider({ children }: { children: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(() => {
    const localCurrentPage = sessionStorage.getItem('currentPage')

    return localCurrentPage ? Number.parseInt(JSON.parse(localCurrentPage), 10) : 1
  })
  const [nextPageSection, setNextPageSection] = useState(false)
  const [prevPageSection, setPrevPageSection] = useState(false)

  return (
    <PageContext.Provider
      value={{ currentPage, nextPageSection, prevPageSection, setCurrentPage, setNextPageSection, setPrevPageSection }}
    >
      {children}
    </PageContext.Provider>
  )
}

export const usePageContext = () => {
  const context = useContext(PageContext)

  if (context === undefined) {
    throw new Error('context is not defined')
  }

  return context
}
