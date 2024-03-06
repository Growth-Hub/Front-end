import { VirtuosoGrid } from 'react-virtuoso'
import { useGetInfiniteAnimalVirtuoso } from '@hooks/api/useGetAnimalVirtuoso'
import AnimalPost from './AnimalPost'
import styled from 'styled-components'
import { forwardRef } from 'react'

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

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
        }}
        data={data?.pages}
        overscan={10}
        itemContent={renderItem}
        components={{
          // eslint-disable-next-line react/no-unstable-nested-components
          List: forwardRef(({ style, children, ...props }, ref) => (
            <div
              ref={ref}
              {...props}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                ...style,
              }}
            >
              {children}
            </div>
          )),
          // eslint-disable-next-line react/no-unstable-nested-components
          Item: ({ ...props }) => (
            <div
              {...props}
              style={{
                padding: '0.5rem',
                width: '33%',
                display: 'flex',
                flex: 'none',
                alignContent: 'stretch',
                boxSizing: 'border-box',
              }}
            ></div>
          ),
        }}
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
