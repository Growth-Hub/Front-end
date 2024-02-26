import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { useFetchData } from '../hooks/useFetchData';

// context에 전달될 값
interface ImagesContextType {
  images: { id: string; url: string; }[];
  isLoading: boolean;
  error: Error | null;
  currentPage: number; 
  setCurrentPage: (page: number) => void;
  totalPages: number; 
}

const ImagesContext = createContext<ImagesContextType | null>(null);


export const ImagesProvider = ({ children }: { children: ReactNode }) => {
  // 로컬 스토리지에서 현재 페이지 번호를 읽어옴
  const initialPage = Number(localStorage.getItem('currentPage')) || 1;
  const [currentPage, setCurrentPage] = useState(initialPage);

  const totalPages = 20; 

  const { data: images, isLoading, error } = useFetchData(currentPage);

  // 현재 페이지 번호가 변경될 때마다 로컬 스토리지를 업데이트
  useEffect(() => {
    localStorage.setItem('currentPage', currentPage.toString());
  }, [currentPage]);

  return (
    <ImagesContext.Provider value={{ images, isLoading, error, currentPage, setCurrentPage, totalPages }}>
      {children}
    </ImagesContext.Provider>
  );
};

export const useImages = (): ImagesContextType => {
  const context = useContext(ImagesContext);
  if (!context) {
    throw new Error('error: useImages');
  }
  return context;
};
