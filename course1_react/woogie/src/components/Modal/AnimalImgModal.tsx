import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import * as S from '@styles/components/Modal'

type Props = {
  postUrl: string
  postId: string
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const modalRoot = document.querySelector('#modal') as HTMLDivElement

export default function AnimalImgModal({ postUrl, postId, setModalOpen }: Props) {
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
      <S.ModalImage>
        <img src={postUrl} alt={postId} />
      </S.ModalImage>
    </S.ModalWrapper>,

    modalRoot,
  )
}
