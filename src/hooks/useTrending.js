import { useMemo } from 'react';
import { Product } from '../types/Product';

export const useTrending = (products: Product[]) => {
  return useMemo(() => {
    return products
      .sort((a, b) => b.views - a.views)
      .slice(0, 6);
  }, [products]);
};