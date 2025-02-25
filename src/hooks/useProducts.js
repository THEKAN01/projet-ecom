import { useState, useEffect } from 'react';
import { productService } from '../services/api';
import { Product } from '../types/Product';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des produits');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};