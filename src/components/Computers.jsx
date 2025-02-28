import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Computers = () => {
  const products = [
    {
      name: 'PS-PC Gamer',
      image: '/images/computers/gamer.jpg',
      specs: 'Gaming PC Series',
      whatsappLink: 'https://wa.me/p/7131862923545040/237679956338',
    },
    {
      name: 'PS-PC',
      image: './images/computers/simplepc.jpg',
      specs: 'Desktop PC Series',
      whatsappLink: 'https://wa.me/p/6842985669131208/237679956338',
    },
    {
      name: 'PS-Samsung',
      image: './images/phones/samsung.jpg',
      specs: 'Samsung Series',
      whatsappLink: 'https://wa.me/p/9385415108171636/237679956338',
    },
    {
      name: 'PS-iPhone',
      image: './images/phones/iphone.jpg',
      specs: 'iPhone Series',
      whatsappLink: 'https://wa.me/p/7545280648850399/237679956338',
    },
    {
      name: 'PS-Google Pixel',
      image: './images/phones/pixel.jpg',
      specs: 'Google Pixel Series',
      whatsappLink: 'https://wa.me/p/7279396042153900/237679956338',
    },
  ];

  return (
    <section id="computers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          PS-Computers & Phones
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.specs}</p>
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
