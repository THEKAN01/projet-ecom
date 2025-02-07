import { useState, useCallback } from 'react';
import { Product } from '../types/Product';
import { CartItem } from '../types/CartItem';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { product, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((productId: number) => {
    setCartItems(prevItems => 
      prevItems.filter(item => item.product.id !== productId)
    );
  }, []);

  const updateQuantity = useCallback((productId: number, quantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.product.id === productId
          ? { ...item, quantity: Math.max(0, quantity) }
          : item
      ).filter(item => item.quantity > 0)
    );
  }, []);

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    total,
    cartCount: cartItems.length
  };
};