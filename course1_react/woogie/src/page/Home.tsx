import AnimalPostVirtuso from '@components/AnimalPosts/AnimalPostVirtuso'
import PageContextProvider from '@contexts/PageContext'
import * as S from '@styles/pages/Home'

export default function Home() {
  return (
    <PageContextProvider>
      <S.HomeLayout>
        <AnimalPostVirtuso />
      </S.HomeLayout>
    </PageContextProvider>
  )
}
