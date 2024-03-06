import React, { useState } from 'react'
import * as S from '@styles/components/Navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const navigate = useNavigate()
  const urlParam = useLocation()
  const moveSearchQuery = (query: string) => {
    navigate(`?query=${query}`)
  }

  return (
    <S.NavContainer>
      <div>
        <Link
          to="/"
          style={{
            marginRight: '1rem',
          }}
        >
          Home
        </Link>
        <Link to="/search">SearchPage</Link>
      </div>
      {urlParam.pathname === '/search' ? (
        <S.NavSearchWrapper>
          <input
            type="text"
            onChange={e => {
              setSearchQuery(e.target.value)
            }}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              moveSearchQuery(searchQuery)
            }}
          />
        </S.NavSearchWrapper>
      ) : (
        ''
      )}
    </S.NavContainer>
  )
}
