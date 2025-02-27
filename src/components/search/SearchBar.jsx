import React from 'react';



export const SearchBar = ({
  searchTerm,
  onSearch,
  suggestions,
  onSelectSuggestion
}) => {
  return (
    <div className="relative">
      <div className="flex items-center border rounded-lg overflow-hidden">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Rechercher un produit..."
          className="w-full px-4 py-2 focus:outline-none"
        />
        <button className="px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700">
          🔍
        </button>
      </div>
      
      {suggestions.length > 0 && (
        <div className="absolute w-full mt-1 bg-white border rounded-lg shadow-lg z-10">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              onClick={() => onSelectSuggestion(suggestion)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};