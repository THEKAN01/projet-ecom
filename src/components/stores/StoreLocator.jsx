import React from 'react';
import { Store } from '../../types/Store';


export const StoreLocator = ({
  stores,
  onSelectStore,
  selectedStore
}) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Nos Boutiques</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <div
              key={store.id}
              className={`bg-white p-6 rounded-lg shadow-md cursor-pointer transform transition-all ${
                selectedStore?.id === store.id ? 'ring-2 ring-indigo-600 scale-105' : ''
              }`}
              onClick={() => onSelectStore(store)}
            >
              <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
              <p className="text-gray-600 mb-2">{store.address}</p>
              <p className="text-gray-600 mb-4">{store.phone}</p>
              <div className="space-y-1">
                {Object.entries(store.hours).map(([day, hours]) => (
                  <p key={day} className="text-sm">
                    <span className="font-medium">{day}:</span> {hours}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};