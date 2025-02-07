import { useState, useEffect, useMemo } from 'react';
import { Product } from '../types/Product';

export const useSearch = (products: Product[]) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const filteredProducts = useMemo(() => {
    if (!searchTerm) return products;
    return products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [products, searchTerm]);

  useEffect(() => {
    if (searchTerm.length > 2) {
      const newSuggestions = products
        .map(p => p.name)
        .filter(name => 
          name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, 5);
      setSuggestions(newSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [searchTerm, products]);

  return {
    searchTerm,
    setSearchTerm,
    suggestions,
    filteredProducts
  };
};