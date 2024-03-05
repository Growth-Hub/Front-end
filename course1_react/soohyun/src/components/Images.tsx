import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useCats } from '../hooks/useCats';
import Modal from './Modal';
import { Cat } from '../models/cat';

const GridContainer = styled.div`
  display: grid;
  gap: 0.5rem;
  padding: 10px;
  grid-template-columns: repeat(3, 1fr); 
`;

const ImageContainer = styled.div<{ photoSpan: number }>`
  cursor: pointer;
  grid-row: span ${props => props.photoSpan};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.5s ease-in-out;
    border-radius: 15px;
  }
`;

const BreedContainer = styled.div`
  display: flex;
  width: inherit;
  align-items: center;
`;

const loading = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`

const Skeleton = styled.div<{ aspectRatio: string }>`
  width: 100%;
  border-radius: 15px;
  background: linear-gradient(90deg, #EAEAEA 25%, #eee 50%, #EAEAEA 75%);
  animation: ${loading} 2s ease-in-out infinite;
  padding-top: ${props => props.aspectRatio};
`;

const ImageLoader = React.memo(({ id, url, width, height, breeds }: Cat) => {
  const [loaded, setLoaded] = useState(false);
  const aspectRatio = `${(height / width) * 100}%`;
  const photoSpan = Math.ceil((height / width) * 200 / 10);
  const [modalOpen, setModalOpen] = useState(false); 

  return (
    <>
      <ImageContainer photoSpan={photoSpan}>
        {!loaded && <Skeleton aspectRatio={aspectRatio} />}
        <img
          alt="cat"
          src={url}
          style={{ opacity: loaded ? 1 : 0 }}
          onLoad={() => setLoaded(true)}
          onClick={() => setModalOpen(true)}
        />
        <Modal modalOpen={modalOpen} modalClose={() => setModalOpen(false)}>
          <img src={url} alt={id} style={{ maxWidth: '100%', maxHeight: '70dvh' }} />
          <BreedContainer>
            {breeds?.map(breed => <div key={breed.id}>{breed.name}</div>)}
          </BreedContainer>
        </Modal>
      </ImageContainer>
      <BreedContainer>

      </BreedContainer>
    </>
  );
});

function Images() {
  const { cats, fetchNextPage, hasNextPage, isFetchingNextPage, error } = useCats();
  const loader = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    }, { threshold: 0.1 }); // 화면 내에 10% 이상 들어 왔을 때 콜백 함수 호출
    if (loader.current) {
      io.observe(loader.current);
    }
    return () => io.disconnect();
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  if (error) return <div>Error: {error.message}</div>;

  return (
    <GridContainer>
      {cats?.map((cat) => (
        <ImageLoader 
          id={cat.id} 
          url={cat.url} 
          width={cat.width} 
          height={cat.height} 
          breeds={cat.breeds} />
      ))}
      <div ref={loader} />
    </GridContainer>
  );
}

export default Images;