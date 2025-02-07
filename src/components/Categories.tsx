import React from 'react';

const categories = [
  { name: 'Bijoux', icon: '💍' },
  { name: 'Téléphones', icon: '📱' },
  { name: 'Ordinateurs', icon: '💻' },
  { name: 'Autres', icon: '🎁' }
];

export const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Catégories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.name} className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow cursor-pointer">
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="text-lg font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};