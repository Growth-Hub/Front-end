import React, { createContext, ReactNode } from 'react';
import { useFetchInfiniteData } from '../hooks/useFetchInfiniteData';
import { Cat } from '../models/cat';

// context에 전달될 값
interface CatsContextType {
  cats: Cat[]; 
  fetchNextPage: () => void; // 다음 페이지 데이터 불러오기 함수
  hasNextPage: boolean | undefined; // 다음 페이지 존재 여부
  isFetchingNextPage: boolean; // 데이터 불러오는 중인지 여부
  error: Error | null; 
}

export const CatsContext = createContext<CatsContextType | null>(null);

export const CatsProvider = ({ children }: { children: ReactNode }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useFetchInfiniteData();

  const cat: Cat[] = data?.pages
    .flatMap(page =>
      page.data
        //.filter((cat: any) => cat.breeds.length > 0)
        .map((cat: any) => ({
          id: cat.id,
          url: cat.url,
          width: cat.width,
          height: cat.height,
          breeds: cat.breeds,
        }))
    ) ?? [];

  return (
    <CatsContext.Provider value={{
      cats: cat,
      fetchNextPage,
      hasNextPage,
      isFetchingNextPage,
      error
    }}>
      {children}
    </CatsContext.Provider>
  );
};
