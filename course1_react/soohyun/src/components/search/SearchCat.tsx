import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { useCats } from '../../hooks/useCats';

const SearchBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);

  width: 80%;
  height: 33px;
  border-radius: 20px;
  background-color: #D9D9D9;
  line-height: 33px;
  padding: 3px 0;

  & > input {
    padding: 0px 30px;
    border: none;
    background: none;
    outline: none;
    caret-color: black;
  }
`;


const AutoCompleteBox = styled.div`
  position: absolute;
  width: 100%;
  background: #fff;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 4px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
`;

const Item = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;


export default function SearchCat() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const navigate = useNavigate();
  const { cats } = useCats();

  useEffect(() => {
    if (searchTerm) {
      const filteredBreeds = cats.flatMap(cat => cat.breeds)
        .filter(breed => breed.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSuggestions(Array.from(new Set(filteredBreeds.map(breed => breed.name))));
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, cats]);

  const handleSelectSuggestion = (breedName: string) => {
    navigate(`/search?breedName=${breedName}`);
    setSearchTerm('');
    setSuggestions([]);
  };

  return (
      <SearchBox >
        <input
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="고양이 종을 검색해보세요." 
          autoFocus 
        />
        {suggestions.length > 0 && (
        <AutoCompleteBox>
          {suggestions.map((suggestion, index) => (
            <Item key={index} onClick={() => handleSelectSuggestion(suggestion)}>
              {suggestion}
            </Item>
          ))}
        </AutoCompleteBox>
      )}
      </SearchBox>

  );
}
