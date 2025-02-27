import React, { useState } from 'react';
import { Product } from '../types/Product';
import { useProductFilter } from '../hooks/useProductFilter';



export const ProductGallery = ({ products, onAddToCart }) => {
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const { filteredProducts, selectedCategory, setSelectedCategory } = useProductFilter(products);
  
  const categories = Array.from(new Set(products.map(p => p.category)));

  const handleMouseEnter = (imageSrc) => setZoomedImage(imageSrc);
  const handleMouseLeave = () => setZoomedImage(null);

  const formatPrice = (price) => {
    return price.toLocaleString('fr-FR') + ' FCFA';
  };

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-center space-x-4">
          <button
            className={`px-4 py-2 rounded-full ${
              !selectedCategory ? 'bg-indigo-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setSelectedCategory('')}
          >
            Tous
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category ? 'bg-indigo-600 text-white' : 'bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(product.image)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative aspect-w-16 aspect-h-9">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-64 transition-transform duration-300 group-hover:scale-110"
                  />
                  {zoomedImage === product.image && (
                    <div className="absolute top-0 left-full ml-4 z-50 hidden group-hover:block">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-[400px] h-[400px] object-cover rounded-lg shadow-xl"
                      />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-indigo-600">
                      {formatPrice(product.price)}
                    </span>
                    <button
                      onClick={() => onAddToCart(product)}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700"
                    >
                      Ajouter au panier
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};