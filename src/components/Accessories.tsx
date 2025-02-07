import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Accessories = () => {
  const accessories = [
    {
      name: 'Écouteurs Sans Fil',
      image: '/images/accessories/earbuds.jpg', // TODO: Ajouter l'image des écouteurs
    },
    {
      name: 'Casque Audio',
      image: '/images/accessories/headphones.jpg', // TODO: Ajouter l'image du casque
    },
    {
      name: 'Montre Connectée',
      image: '/images/accessories/smartwatch.jpg', // TODO: Ajouter l'image de la montre
    },
  ];

  return (
    <section id="accessories" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Accessories
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {accessories.map((accessory, index) => (
            <motion.div
              key={accessory.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={accessory.image}
                alt={accessory.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{accessory.name}</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://wa.me/237679956338"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp size={20} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href="https://www.facebook.com/share/18MZyV9xak/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                  >
                    <FaFacebookF size={20} />
                    <span>Facebook</span>
                  </a>
                  <a
                    href="https://www.instagram.com/p_its_case?igsh=bzJ3YWRweGNnMDl3"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center space-x-2 bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
                  >
                    <FaInstagram size={20} />
                    <span>Instagram</span>
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