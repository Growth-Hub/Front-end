import React, { useEffect, useRef, useState, Suspense } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useWebResults } from '../../hooks/useWebResults';
import { WebDocument } from '../../models/web';
import styled from 'styled-components';
import { cleanText } from '../../utils/cleanText';

const DocContainer = styled.div`
  background-color: #ababab;
  border-radius: 10px;
  padding: 20px 50px;
  margin-bottom: 20px;
`;
const Loader = styled.div`
  height: 20px;
  margin: 10px 0;
`;

function WebResultContent({ query }: { query: string }) {
  const { data, fetchNextPage, hasNextPage } = useWebResults(query || '');
  const loader = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      }, { threshold: 0.5 });
    if (loader.current) io.observe(loader.current);
    return () => io.disconnect();
  }, [fetchNextPage, hasNextPage]);

  return (
    <div>
      {data?.pages.map((page, pageIndex) =>
        page.results.map((doc: WebDocument, docIndex) => (
          <DocContainer key={`${pageIndex}-${docIndex}`}>
            <a href={doc.url}>{cleanText(doc.title)}</a>
            <p>{cleanText(doc.contents)}</p>
            <p>{cleanText(doc.datetime)}</p>
          </DocContainer>
        ))
      )}
      <Loader ref={loader}></Loader>
    </div>
  );
}

export default function WebResult() {
  let [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WebResultContent query={query ?? ""} />
    </Suspense>
  );
}