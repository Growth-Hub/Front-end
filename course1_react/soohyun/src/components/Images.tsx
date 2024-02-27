import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useImages } from '../context/ImagesContext';
import Modal from './Modal';

const GridContainer = styled.div`
  column-count: 3;
  column-gap: 20px; 
  width: 100%;
  break-inside: avoid; 
`;

const ImageContainer = styled.div`
  break-inside: avoid;
  margin-bottom: 20px;
`;

const StyledImage = styled.img`
  width: 100%;
  border-radius: 15px;
  transition: opacity 0.5s ease-in-out;
  object-fit: cover;
`;

const loading = keyframes`
  0% {
    background-position: -468px 0
  }
  100% {
    background-position: 468px 0
  }
`;

const Skeleton = styled.div`
  width: 100%;
  border-radius: 10px;
  background: linear-gradient(90deg, #EAEAEA 25%, #eee 50%, #EAEAEA 75%);
  animation: ${loading} 3s ease-in-out infinite;
`;

const ImageLoader = React.memo(({ src, alt, width, height }: { src: string; alt: string; width: number; height: number }) => {
  const [loaded, setLoaded] = useState(false);
  const aspectRatio = (height / width) * 100;
  const DynamicSkeleton = styled(Skeleton)`padding-top: ${aspectRatio}%;`;
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ImageContainer onClick={openModal}>
      {!loaded && <DynamicSkeleton />}
      <StyledImage
        src={src}
        alt={alt}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <img src={src} alt={alt} style={{ maxWidth: '100%', maxHeight: '80vh' }} />
      </Modal>
    </ImageContainer>
    
  );
});

function Images() {
  const { images, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, error } = useImages();
  const loader = useRef(null);

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasNextPage && !isFetchingNextPage) {
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
      {images?.map((image) => (
        <ImageLoader key={image.id} src={image.url} width={image.width} height={image.height} alt="cat" />
      ))}
      <div ref={loader} />
    </GridContainer>
  );
}

export default Images;