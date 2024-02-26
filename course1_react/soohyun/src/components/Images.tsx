import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useImages } from '../context/ImagesContext';

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const ImageContainer = styled.div`
  margin-bottom: 10px;
  height: 170px;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 170px;
  border-radius: 15px;
  transition: opacity 0.5s ease-in-out;
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
  height: 170px;
  border-radius: 15px;
  background: linear-gradient(90deg, #EAEAEA 25%, #eee 50%, #EAEAEA 75%);
  animation: ${loading} 3s ease-in-out infinite;
`;

const ImageLoader = ({ src, alt }: { src: string; alt: string }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <ImageContainer>
      {!loaded && <Skeleton />}
      <StyledImage
        src={src}
        alt={alt}
        style={{ opacity: loaded ? 1 : 0 }}
        onLoad={() => setLoaded(true)}
        loading="lazy"
      />
    </ImageContainer>
  );
};

function Images() {
  const { images, isLoading, error } = useImages();
  if (error) return <div>Error: {error.message}</div>;

  return (
    <GridContainer>
      {isLoading
        ? Array.from({ length: 12 }).map((_, index) => (
            <ImageContainer key={index}>
              <Skeleton />
            </ImageContainer>
          ))
        : images?.map((image) => (
            <ImageLoader key={image.id} src={image.url} alt="cat" />
          ))}
    </GridContainer>
  );
};

export default Images;
