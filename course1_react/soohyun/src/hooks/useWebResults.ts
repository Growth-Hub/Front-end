import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { WebDocument } from '../models/web';

interface WebResponse {
  documents: WebDocument[];
  meta: { is_end: boolean };
}

const fetchWebResults = async (query: string, pageParam = 1) => {
  const { data } = await axios.get<WebResponse>(`https://dapi.kakao.com/v2/search/web`, {
    params: { query, page: pageParam },
    headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}` },
  });

  if (!query.trim()) {
    console.log('검색중');
    return { results: [], nextPage: null };
  }

  return { 
    results: data.documents, 
    nextPage: data.meta.is_end ? null : pageParam + 1 
  };
};

export function useWebResults(query: string) {
  return useInfiniteQuery({
    queryKey: ['searchWeb', query],
    queryFn: ({ pageParam = 1 }) => fetchWebResults(query, pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
}
