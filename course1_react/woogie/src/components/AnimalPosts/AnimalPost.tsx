import AnimalImgModal from '@components/Modal/AnimalImgModal'
import * as S from '@styles/components/AnimalPosts'
import { forwardRef, useState } from 'react'

type Props = {
  id: string
  postUrl: string
  width: number
  height: number
}

export default forwardRef<HTMLDivElement, Props>(function AnimalPost({ postUrl, id, width, height }, ref) {
  const [modalOpen, setModalOpen] = useState(false)
  const widthHeightRatio = height / width
  const galleryHeight = Math.ceil(250 * widthHeightRatio)
  const photoSpan = Math.ceil(galleryHeight / 10)

  return (
    <>
      {modalOpen && <AnimalImgModal postUrl={postUrl} postId={id} setModalOpen={setModalOpen} />}
      <S.AnimalPostWrapper $photospan={photoSpan} ref={ref} onClick={() => setModalOpen(true)}>
        <img src={postUrl} alt={id} />
      </S.AnimalPostWrapper>
    </>
  )
})
