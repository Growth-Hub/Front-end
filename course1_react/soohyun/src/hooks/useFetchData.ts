import { useQuery } from '@tanstack/react-query';

async function fetchData (page: number, limit: number = 12) {
    // localStorage 데이터 존재 유무 확인. 유 => 로컬에서 불러옴
    const cachedData = localStorage.getItem(`catImages-page-${page}`);
    if (cachedData) return JSON.parse(cachedData);

  const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=${limit}&page=${page}`, {
    headers: { 'x-api-key': 'live_CGL7BtiNmm0aAub1mWrrHDEaRfoHNmd7z9OOTJZU8qcccVJ4GvsAAEqRKZOy6eRs' },
  });
  if (!response.ok) throw new Error('Network response was not ok');

  const data = await response.json();
  // 데이터를 로컬 스토리지에 저장
  localStorage.setItem(`catImages-page-${page}`, JSON.stringify(data));
  return data;
};

export function useFetchData (page: number) {
  return useQuery({
    queryKey: ['catImages', page],
    queryFn: () => fetchData(page),
    staleTime: 5 * 60 * 1000, 
    gcTime: 24 * 60 * 60 * 1000,
  });
};