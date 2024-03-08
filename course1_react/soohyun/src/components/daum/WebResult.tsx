import React, { useEffect, useState } from 'react';
import { useSearch } from '../../context/SearchContext'; 
import axios from 'axios';
import { Web } from '../../models/web';

export default function WebResult() {
  const { searchQuery } = useSearch(); 
  const [results, setResults] = useState<Web[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (searchQuery) { 
        const response = await axios.get(`https://dapi.kakao.com/v2/search/web`, {
          params: { query: searchQuery }, 
          headers: { Authorization: `KakaoAK ${process.env.REACT_APP_REST_API_KEY}` },
        });
        setResults(response.data.documents);
      }
    };
    fetchData();
  }, [searchQuery]); 

  return (
    <div>
      {results?.map((result, index) => (
        <div key={index}>
          <a href={result.url} >
            {result.title}
          </a>
        </div>
      ))}
    </div>
  );
}
