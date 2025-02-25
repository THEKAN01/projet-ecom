import React from 'react';
import { motion } from 'framer-motion';

export const Testimonials = () => {
  const testimonials = [
    {
      content: 'Les écouteurs sans fil que j\'ai achetés sont d\'une qualité exceptionnelle. Le service client a été très professionnel et m\'a parfaitement conseillé !',

      video: '/videos/testimonials/video1.mp4', // TODO: Ajouter la première vidéo de témoignage (tout format MP4 accepté)
    },
    {
      content: 'La customisation de la pochette de mon téléphone est magnifique. Un travail de qualité qui rend mon téléphone vraiment unique !',
      
      video: '/videos/testimonials/video2.mp4', // TODO: Ajouter la deuxième vidéo de témoignage (tout format MP4 accepté)
    },
    {
      content: 'La customisation de mon PC est juste incroyable. L\'équipe a su parfaitement répondre à mes attentes et le résultat est au-delà de mes espérances !',
      
      video: '/videos/testimonials/video3.mp4', // TODO: Ajouter la troisième vidéo de témoignage (tout format MP4 accepté)
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          PS-Témoignages Clients
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-50 rounded-lg p-6 shadow-lg"
            >
              <div className="mb-4 relative pt-[56.25%]">
                <video
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  controls
                  poster={testimonial.image}
                  preload="none"
                >
                  <source src={testimonial.video} type="video/mp4" />
                  Votre navigateur ne supporte pas la lecture de vidéos.
                </video>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0 mr-4">
                  <img
                    src={testimonial.image}
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-gray-600">{testimonial.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};