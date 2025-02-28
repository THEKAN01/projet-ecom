import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Gaming = () => {
  const products = [
    {
      name: 'PS-PlayStation 5',
      image: './images/gaming/ps5.jpg',
      whatsappLink: 'https://wa.me/p/7196117923758787/237679956338',
    },
    {
      name: 'PS-PlayStation 4',
      image: './images/gaming/ps4.jpg',
      whatsappLink: 'https://wa.me/p/7196117923758787/237679956338',
    },
    {
      name: 'PS-Videogames',
      image: './images/gaming/videogames.jpg',
      whatsappLink: 'https://wa.me/p/6922827987823861/237679956338',
    },
  ];

  return (
    <section id="gaming" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          PS-Gaming Station
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-4">{product.name}</h3>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href={product.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
                  >
                    <FaWhatsapp size={24} />
                    <span>Catalogue</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/18MZyV9xak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-3 rounded-lg hover:bg-blue-600 transition-colors text-lg font-medium"
                  >
                    <FaFacebookF size={24} />
                    <span>Voir sur Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p_its_case?igsh=bzJ3YWRweGNnMDl3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-pink-500 text-white px-4 py-3 rounded-lg hover:bg-pink-600 transition-colors text-lg font-medium"
                  >
                    <FaInstagram size={24} />
                    <span>Voir sur Instagram</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
