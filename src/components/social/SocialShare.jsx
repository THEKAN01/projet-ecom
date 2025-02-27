import React from 'react';
import { CartItem } from '../../types/CartItem';
import { FaWhatsapp, FaFacebookMessenger, FaInstagram } from 'react-icons/fa';



export const SocialShare = ({
  isOpen,
  onClose,
  cartItems,
  total
}) => {
  const generateMessage = () => {
    const message = `Bonjour, je souhaite commander les articles suivants:\n\n${
      cartItems.map(item => 
        `${item.product.name} (${item.quantity}x) - ${item.product.price.toLocaleString('fr-FR')} FCFA`
      ).join('\n')
    }\n\nTotal: ${total.toLocaleString('fr-FR')} FCFA`;
    return encodeURIComponent(message);
  };

  const handleShare = (platform) => {
    const message = generateMessage();
    let url = '';

    switch (platform) {
      case 'whatsapp':
        url = `https://wa.me/237679956338?text=${message}`;
        break;
      case 'facebook':
        url = 'https://www.facebook.com/share/18MZyV9xak/';
        break;
      case 'instagram':
        url = 'https://www.instagram.com/p_its_case?igsh=bzJ3YWRweGNnMDl3';
        break;
    }

    window.open(url, '_blank');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Choisissez votre plateforme</h2>
        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => handleShare('whatsapp')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-green-50"
          >
            <FaWhatsapp className="text-4xl text-green-500" />
            <span className="mt-2">WhatsApp</span>
          </button>
          <button
            onClick={() => handleShare('facebook')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-blue-50"
          >
            <FaFacebookMessenger className="text-4xl text-blue-500" />
            <span className="mt-2">Facebook</span>
          </button>
          <button
            onClick={() => handleShare('instagram')}
            className="flex flex-col items-center p-4 border rounded-lg hover:bg-pink-50"
          >
            <FaInstagram className="text-4xl text-pink-500" />
            <span className="mt-2">Instagram</span>
          </button>
        </div>
        <button
          onClick={onClose}
          className="mt-6 w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
        >
          Annuler
        </button>
      </div>
    </div>
  );
};