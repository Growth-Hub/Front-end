import AnimalImgModal from '@components/Modal/AnimalImgModal'
import * as S from '@styles/components/AnimalPosts'
import { useState } from 'react'

type Props = {
  id: string
  postUrl: string
}

export default function AnimalPost({ postUrl, id }: Props) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      {modalOpen && <AnimalImgModal postUrl={postUrl} postId={id} setModalOpen={setModalOpen} />}
      <S.AnimalPostWrapper onClick={() => setModalOpen(true)}>
        <img src={postUrl} alt={id} />
      </S.AnimalPostWrapper>
    </>
  )
}
