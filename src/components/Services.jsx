import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Services = () => {
  const services = [
    {
      title: 'PS-Customisation PC',
      description: 'Personnalisez votre setup gaming avec nos services sur mesure',
      image: './images/services/custo_pc.jpg',
      whatsappLink: 'https://wa.me/p/24399411629704664/237679956338',
    },
    {
      title: 'PS-Customisation Pochette',
      description: 'Donnez un style unique à votre téléphone',
      image: './images/services/custo1.jpg',
      whatsappLink: 'https://wa.me/p/6852820414802154/237679956338',
    },
    {
      title: 'PS-Customisation Bijoux',
      description: 'Personnalisez vos bijoux avec notre expertise',
      image: './images/services/bijoux.jpg',
      whatsappLink: 'https://wa.me/p/7719582821437604/237679956338',
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          PS-Nos Services de Customisation
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative pt-[75%]">
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute top-0 left-0 w-full h-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="grid grid-cols-1 gap-3">
                  <a
                    href={service.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center space-x-2 bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-colors text-lg font-medium"
                  >
                    <FaWhatsapp size={24} />
                    <span>Commander sur WhatsApp</span>
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
