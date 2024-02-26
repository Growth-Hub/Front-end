import Pagination from '@components/Pagination'
import PageContextProvider from '@contexts/PageContext'
import * as S from '@styles/pages/Home'
import { Suspense } from 'react'
import { AnimalPostSkeleton } from '@components/Skeleton/AnimalPostSkeleton'
import AnimalPosts from '@components/AnimalPosts/AnimalPosts'

export default function Home() {
  return (
    <PageContextProvider>
      <S.HomeLayout>
        <Suspense fallback={<AnimalPostSkeleton />}>
          <AnimalPosts />
        </Suspense>
        <Pagination />
      </S.HomeLayout>
    </PageContextProvider>
  )
}
