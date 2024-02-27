import * as S from '@styles/components/AnimalPosts'
import { MAX_IMG_COUNT } from '@utils/Constants'

export const AnimalPostSkeleton = () => {
  const fallbackItem = Array.from({ length: MAX_IMG_COUNT }, (_, i) => i + 1)
  return (
    <S.AnimalPostGridContainer>
      {fallbackItem.map(item => (
        <S.AnimalPostWrapper key={item}>
          <S.AnimialPostSkeleton />
        </S.AnimalPostWrapper>
      ))}
    </S.AnimalPostGridContainer>
  )
}
