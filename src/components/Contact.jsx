import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaMapMarkerAlt, FaWhatsapp, FaFacebookF, FaInstagram } from 'react-icons/fa';

export const Contact = () => {
  const [showSocialMenu, setShowSocialMenu] = useState(false);

  const socialLinks = [
    {
      name: 'WhatsApp',
      icon: <FaWhatsapp size={20} />,
      url: 'https://wa.me/c/237679956338',
      color: 'bg-green-500 hover:bg-green-600'
    },
    {
      name: 'Facebook',
      icon: <FaFacebookF size={20} />,
      url: 'https://www.facebook.com/share/18MZyV9xak/',
      color: 'bg-blue-500 hover:bg-blue-600'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram size={20} />,
      url: 'https://www.instagram.com/p_its_case?igsh=bzJ3YWRweGNnMDl3',
      color: 'bg-pink-500 hover:bg-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          PS-Contactez-nous
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="space-y-6 text-lg mb-10">
            <div className="flex items-center justify-center">
              <FaPhone className="text-indigo-600 mr-4" />
              <span>+237 679 956 338</span>
            </div>
            <div className="flex items-center justify-center">
              <FaMapMarkerAlt className="text-indigo-600 mr-4" />
              <span>Yaoundé, Cameroun</span>
            </div>
          </div>

          <div className="relative">
            <button
              onClick={() => setShowSocialMenu(!showSocialMenu)}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-semibold"
            >
              Voir tout le catalogue
            </button>

            {showSocialMenu && (
              <div className="absolute mt-2 w-full max-w-sm left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-4 z-50">
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center space-x-2 ${link.color} text-white p-3 rounded-lg w-full transition-colors`}
                    >
                      {link.icon}
                      <span>Voir sur {link.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};