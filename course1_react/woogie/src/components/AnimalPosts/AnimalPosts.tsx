import * as S from '@styles/components/AnimalPosts'
import { useGetAnimalPicture } from '@hooks/api/useGetAnimalPicture'
import { Suspense } from 'react'
import { AnimalPostSkeleton } from '@components/Skeleton/AnimalPostSkeleton'
import AnimalPost from './AnimalPost'

export default function AnimalPosts() {
  const animalPictureData = useGetAnimalPicture()

  return (
    <Suspense fallback={<AnimalPostSkeleton />}>
      <S.AnimalPostGridContainer>
        {animalPictureData.map(post => (
          <AnimalPost key={post.id} id={post.id} postUrl={post.url} />
        ))}
      </S.AnimalPostGridContainer>
    </Suspense>
  )
}
