import { VirtuosoGrid } from 'react-virtuoso'
import { useGetInfiniteAnimalVirtuoso } from '@hooks/api/useGetAnimalVirtuoso'
import AnimalPost from './AnimalPost'

export default function AnimalPostVirtuso() {
  const { data, isLoading, fetchNextPage } = useGetInfiniteAnimalVirtuoso()

  const renderItem = (index: number, post: AnimalPostType) => {
    return <AnimalPost key={post.id} id={post.id} postUrl={post.url} width={post.width} height={post.height} />
  }
  return (
    <>
      <VirtuosoGrid
        style={{
          width: '50%',
          height: '300px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
        data={data?.pages}
        overscan={10}
        itemContent={renderItem}
        endReached={() => {
          if (!isLoading) {
            fetchNextPage()
          }
        }}
      />

      {isLoading ? <p>is Loading..</p> : ''}
    </>
  )
}
