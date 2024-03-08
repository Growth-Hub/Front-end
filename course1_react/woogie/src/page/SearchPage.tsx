import WebSearchPosts from '@components/WebSearchPosts'
import { useSearchParams } from 'react-router-dom'

export default function SearchPage() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams()
  const searchQuery = searchParams.get('query')

  return searchQuery ? <WebSearchPosts searchQuery={searchQuery} /> : <div>검색해보세요</div>
}
