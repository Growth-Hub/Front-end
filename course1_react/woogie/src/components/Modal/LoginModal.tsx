import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as S from '@styles/components/Modal'
import LoginForm from '@components/LoginForm'

type Props = {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const modalRoot = document.querySelector('#modal') as HTMLDivElement

export default function LoginModal({ setModalOpen }: Props) {
  useEffect(() => {
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
    `
    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.Backdrop onClick={() => setModalOpen(false)} />
      <LoginForm />
    </S.ModalWrapper>,

    modalRoot,
  )
}
