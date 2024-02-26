import React from 'react'
import ReactDOM from 'react-dom'
import * as S from '@styles/components/Modal'

type Props = {
  postUrl: string
  postId: string
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const modalRoot = document.querySelector('#modal') as HTMLDivElement

export default function AnimalImgModal({ postUrl, postId, setModalOpen }: Props) {
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
