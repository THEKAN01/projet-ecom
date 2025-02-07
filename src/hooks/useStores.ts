import { useState, useEffect } from 'react';
import { Store } from '../types/Store';
import { Product } from '../types/Product';
import { stores } from '../data/stores';
import { featuredProducts } from '../data/products';

export const useStores = () => {
  const [storeList, setStoreList] = useState<Store[]>(stores);
  const [selectedStore, setSelectedStore] = useState<Store | null>(null);
  const [storeProducts, setStoreProducts] = useState<Product[]>([]);

  const loadStoreProducts = (storeId: number) => {
    const store = stores.find(s => s.id === storeId);
    if (store) {
      const products = featuredProducts.filter(p => store.products.includes(p.id));
      setStoreProducts(products);
    }
  };

  const selectStore = (store: Store) => {
    setSelectedStore(store);
    loadStoreProducts(store.id);
  };

  // Charger les produits de la première boutique par défaut
  useEffect(() => {
    if (storeList.length > 0 && !selectedStore) {
      selectStore(storeList[0]);
    }
  }, [storeList]);

  return {
    stores: storeList,
    selectedStore,
    storeProducts,
    selectStore
  };
};