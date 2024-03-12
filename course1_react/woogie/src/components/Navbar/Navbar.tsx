import React, { useState } from 'react'
import * as S from '@styles/components/Navbar'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import LoginModal from '@components/Modal/LoginModal'
import SearchInput from './SearchInput'

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState<string>('')
  const navigate = useNavigate()
  const urlParam = useLocation()
  const moveSearchQuery = (query: string) => {
    navigate(`?query=${query}`)
  }

  const [openLogin, setOpenLogin] = useState(true)

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
          <SearchInput searchQuery={searchQuery} moveSearchQuery={moveSearchQuery} setSearchQuery={setSearchQuery} />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            onClick={() => {
              if (searchQuery) {
                moveSearchQuery(searchQuery)
              }
            }}
          />
        </S.NavSearchWrapper>
      ) : (
        ''
      )}
      <S.LoginButton
        onClick={() => {
          setOpenLogin(true)
        }}
        type="button"
      >
        로그인
      </S.LoginButton>
      {openLogin && <LoginModal setModalOpen={setOpenLogin} />}
    </S.NavContainer>
  )
}
