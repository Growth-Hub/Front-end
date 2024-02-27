import { useImages } from '../context/ImagesContext';
import styled from 'styled-components';

const Pages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;s
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  margin: 0 2px;
  border: 1px solid #999;
  border-radius: 10px;
  background: #fff;
  &:disabled { color: #999; }
  cursor: pointer;
`;

function Pagination() {
  const { currentPage, setCurrentPage, totalPages } = useImages();
  //시작 페이지 계산 (1, 6, 11, 16)
  const startPage = Math.floor((currentPage - 1) / 5) * 5 + 1; 

  return (
    <Pages>
      <Button onClick={() => setCurrentPage(1)} disabled={currentPage === 1}>
        {"<<"}
      </Button>
      <Button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
        {"<"}
      </Button>
      {Array.from({ length: Math.min(5, totalPages - startPage + 1) }, (_, index) => (
        <Button
          key={startPage + index}
          disabled={currentPage === startPage + index}
          onClick={() => setCurrentPage(startPage + index)}
        >
          {startPage + index}
        </Button>
      ))}
      <Button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>
        {">"}
      </Button>
      <Button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages}>
        {">>"}
      </Button>
    </Pages>
  );
}

export default Pagination;
