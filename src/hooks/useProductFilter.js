import { useState, useMemo } from 'react';
import { Product } from '../types/Product';

export const useProductFilter = (products: Product[]) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const filteredProducts = useMemo(() => {
    if (!selectedCategory) return products;
    return products.filter(product => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return {
    filteredProducts,
    selectedCategory,
    setSelectedCategory
  };
};