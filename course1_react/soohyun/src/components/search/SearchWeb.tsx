import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../../context/SearchContext'; 
import { InputBox } from '../../styles/InputBox';

export default function SearchWeb() {
  const { setSearchQuery } = useSearch();
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => { 
    setSearchQuery(input);
    navigate('/daum/web/search');
  };

  return (
    <div>
      <InputBox
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='웹 검색'
      />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
}
