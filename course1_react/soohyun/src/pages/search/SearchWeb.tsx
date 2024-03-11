import React, { useState, useEffect, useDeferredValue } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWebResults } from '../../hooks/useWebResults';
import { InputBox, ResultItem } from '../../styles/Search';
import { cleanText } from '../../utils/cleanText';
import { shortenText } from '../../utils/shortenText';

export default function SearchWeb() {
  const [input, setInput] = useState<string>('');
  const [showResults, setShowResults] = useState<boolean>(true);
  const navigate = useNavigate();

  // 디바운싱
  const [debouncedInput, setDebouncedInput] = useState<string>(input);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 300); // 300ms 지연

    return () => {
      clearTimeout(handler);
    };
  }, [input]);
  const { data } = useWebResults(debouncedInput);

  // 입력 변경 처리
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setShowResults(true);
  };

  // 결과 선택
  const handleSelect = (query: string) => {
    navigate(`/search?query=${query}`);
    setShowResults(false);
  };

  // enter 검색 결과
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      navigate(`/search?query=${input}`);
      setShowResults(false);
    }
  };

  return (
    <div>
      <InputBox
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        onFocus={() => setInput('')}
        placeholder='웹 검색'
      />
      {showResults && data?.pages.map((page, pageIndex) => (
        <div key={pageIndex}>
          {page.results.map((doc, docIndex) => (
            <ResultItem key={docIndex} onClick={() => handleSelect(doc.title)}>
              {shortenText({text: cleanText(doc.title), limit: 40})}
            </ResultItem>
          ))}
        </div>
      ))}
    </div>
  );
}
