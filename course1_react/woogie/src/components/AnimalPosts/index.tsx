import * as S from '@styles/components/AnimalPosts'
// import { useGetInfiniteAnimalPicture } from '@hooks/api/useGetInfiniteAnimalPicture'
import { useGetInfiniteAnimalPicture } from '@hooks/api/useGetInfiniteAnimalPicture'
import AnimalPost from './AnimalPost'

export default function AnimalPosts() {
  const { data, observerElem, isLoading } = useGetInfiniteAnimalPicture()
  return (
    <S.AnimalPostGridContainer>
      {data &&
        data.pages.map((post, index) => (
          <AnimalPost
            ref={data.pages.length - 1 === index ? observerElem : null}
            key={post.id}
            id={post.id}
            postUrl={post.url}
            width={post.width}
            height={post.height}
          />
        ))}
      {isLoading ? <p>is Loading..</p> : ''}
    </S.AnimalPostGridContainer>
  )
}
