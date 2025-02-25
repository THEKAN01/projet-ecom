import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          className="w-full h-full object-cover opacity-50"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      </div>
      
      <div className="relative container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Bienvenue chez Pegazus Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
        >
          Votre expert en customisation et équipements gaming haut de gamme
        </motion.p>
        
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          href="#services"
          className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
        >
          Découvrir nos services
        </motion.a>
      </div>
    </section>
  );
};