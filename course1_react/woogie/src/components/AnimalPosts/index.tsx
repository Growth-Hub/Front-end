import * as S from '@styles/components/AnimalPosts'
import { useGetAnimalPicture } from '@hooks/api/useGetAnimalPicture'
import AnimalPost from './AnimalPost'

export default function AnimalPosts() {
  const animalPictureData = useGetAnimalPicture()
  return (
    <S.AnimalPostGridContainer>
      {animalPictureData.map(post => (
        <AnimalPost key={post.id} id={post.id} postUrl={post.url} />
      ))}
    </S.AnimalPostGridContainer>
  )
}
