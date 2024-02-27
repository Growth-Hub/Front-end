import React, { createContext, useContext, ReactNode } from 'react';
import { useFetchInfiniteData } from '../hooks/useFetchInfiniteData';

// context에 전달될 값
interface ImagesContextType {
  images: { id: string; url: string; width: number; height: number }[]; // 이미지 목록
  fetchNextPage: () => void; // 다음 페이지 데이터 불러오기 함수
  hasNextPage: boolean | undefined; // 다음 페이지 존재 여부
  isFetchingNextPage: boolean; // 데이터 불러오는 중인지 여부
  isLoading: boolean; 
  error: Error | null; 
}

const ImagesContext = createContext<ImagesContextType | null>(null);

export const ImagesProvider = ({ children }: { children: ReactNode }) => {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useFetchInfiniteData();
  console.log(data);

  const images = data ? data.pages.reduce<{ id: string; url: string; width: number; height: number }[]>((acc, page) => {
    return [...acc, ...page.data];
  }, []) : [];

  return (
    <ImagesContext.Provider value={{ images, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = (): ImagesContextType => {
  const context = useContext(ImagesContext);
  if (!context) throw new Error('error');
  return context;
};