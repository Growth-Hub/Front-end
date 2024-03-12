/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react'
import * as S from '@styles/components/Navbar'
import { useDebounceQuery } from '@hooks/useDebounceQuery'
import { Link } from 'react-router-dom'
import { useGetAutoListWeb } from '@hooks/api/useGetAutoListWeb'

type Props = {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  moveSearchQuery: (query: string) => void
}

export default function SearchInput({ searchQuery, setSearchQuery, moveSearchQuery }: Props) {
  const debounceSearchQuery = useDebounceQuery(searchQuery, 500)
  const { autoList, setAutoList, handleAutoListItem } = useGetAutoListWeb(debounceSearchQuery)

  return (
    <div>
      <input
        type="text"
        onChange={e => {
          setSearchQuery(e.target.value)
        }}
        onBlur={event => {
          if (!event.relatedTarget || event.relatedTarget.tagName !== 'A') {
            setAutoList(undefined)
          }
        }}
        onKeyDown={e => {
          if (e.key === 'Enter')
            if (searchQuery) {
              moveSearchQuery(searchQuery)
              setAutoList(undefined)
            }
        }}
      />

      {autoList && (
        <S.SearchInputAutoList>
          {autoList.documents.map((searchItem, index) => (
            <div key={searchItem.title + String(index)}>
              <Link
                style={{ cursor: 'pointer' }}
                onMouseDown={() => {
                  handleAutoListItem()
                }}
                to={searchItem.url}
              >
                {searchItem.title.replace(/(<([^>]+)>)/gi, '')}
              </Link>
            </div>
          ))}
        </S.SearchInputAutoList>
      )}
    </div>
  )
}
