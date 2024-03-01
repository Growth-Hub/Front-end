// useImages.ts
import { useContext } from 'react';
import { CatsContext } from '../context/CatsContext';

export const useCats = () => {
  const context = useContext(CatsContext);
  if (!context) {
    throw new Error('error');
  }
  return context;
};
