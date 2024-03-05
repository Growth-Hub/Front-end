import { SearchData } from "../models/kakao";

const size = 10;

export const getKakao = async ({
  pageParam,
  query,
}: {
  pageParam: number;
  query: string;
}) => {
  if (!query) return [];
  const data = (await fetch(
    `https://dapi.kakao.com/v2/search/web?query=${query}&page=${pageParam}&size=${size}`,
    {
      method: "GET",
      headers: {
        Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}`,
      },
    }
  ).then((data) => data.json())) as SearchData;
  return data.documents;
};
