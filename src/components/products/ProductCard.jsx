import React from 'react';
import { Product } from '../../types/Product';



export const ProductCard = ({ product, onAddToCart }) => {
  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR') + ' FCFA';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
      <div className="aspect-w-16 aspect-h-9 bg-gray-200">
        <img 
          src={product.image} 
          alt={product.name} 
          className="object-cover w-full h-64"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <span className="bg-indigo-100 text-indigo-800 text-sm px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-indigo-600">
            {formatPrice(product.price)}
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transform transition-transform active:scale-95"
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};