import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Pegazus Services</h3>
            <p className="text-gray-400">
              Votre expert en customisation et équipements gaming haut de gamme.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#gaming" className="text-gray-400 hover:text-white">Gaming</a></li>
              <li><a href="#computers" className="text-gray-400 hover:text-white">Computers&Phones</a></li>
              <li><a href="#accessories" className="text-gray-400 hover:text-white">Accessories</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>+237 679 956 338</li>
              <li>Yaoundé, Cameroun</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/18MZyV9xak/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaFacebookF size={20} />
              </a>
              <a href="https://wa.me/237679956338" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://www.instagram.com/p_its_case?igsh=bzJ3YWRweGNnMDl3" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Pegazus Services. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};