import AnimalPosts from '@components/AnimalPosts'
import PageContextProvider from '@contexts/PageContext'
import * as S from '@styles/pages/Home'

export default function Home() {
  return (
    <PageContextProvider>
      <S.HomeLayout>
        <AnimalPosts />
      </S.HomeLayout>
    </PageContextProvider>
  )
}
