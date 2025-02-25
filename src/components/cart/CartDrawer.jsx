import React from 'react';
import { CartItem } from '../../types/CartItem';
import { SocialShare } from '../social/SocialShare';



export const CartDrawer = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemove,
  total
}) => {
  const [showSocialShare, setShowSocialShare] = React.useState(false);

  const handleCheckout = () => {
    setShowSocialShare(true);
  };

  return (
    <div className={`fixed inset-y-0 right-0 w-96 bg-white shadow-lg transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    } transition-transform duration-300 ease-in-out z-50`}>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Votre Panier</h2>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
              ✕
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.map((item) => (
            <div key={item.product.id} className="flex items-center mb-4 p-2 border-b">
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="ml-4 flex-1">
                <h3 className="font-semibold">{item.product.name}</h3>
                <p className="text-gray-600">
                  {item.product.price.toLocaleString('fr-FR')} FCFA
                </p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                    className="px-2 py-1 border rounded"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                    className="px-2 py-1 border rounded"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.product.id)}
                className="text-red-500 hover:text-red-700"
              >
                Supprimer
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex justify-between mb-4">
            <span className="font-semibold">Total:</span>
            <span className="font-bold">
              {total.toLocaleString('fr-FR')} FCFA
            </span>
          </div>
          <button
            onClick={handleCheckout}
            className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700"
          >
            Commander
          </button>
        </div>
      </div>

      {showSocialShare && (
        <SocialShare
          isOpen={showSocialShare}
          onClose={() => setShowSocialShare(false)}
          cartItems={cartItems}
          total={total}
        />
      )}
    </div>
  );
};