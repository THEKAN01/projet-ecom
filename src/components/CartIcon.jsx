import React from 'react';

interface CartIconProps {
  count: number;
  onClick: () => void;
}

export const CartIcon: React.FC<CartIconProps> = ({ count, onClick }) => {
  return (
    <div className="relative">
      <div 
        onClick={onClick}
        className="p-2 hover:text-indigo-600 transition-colors cursor-pointer"
      >
        <span className="sr-only">Panier</span>
        🛒
      </div>
      {count > 0 && (
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {count}
        </span>
      )}
    </div>
  );
};