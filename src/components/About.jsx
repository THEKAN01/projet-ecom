import React from 'react';

export const About = () => {
  return (
    <section id="a-propos" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">À Propos de Pegasus</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/images/about.jpg" 
              alt="À propos de Pegasus" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-lg text-gray-600 mb-6">
              Pegasus est votre destination de choix pour des produits d'exception. 
              Nous nous engageons à offrir une expérience shopping unique avec une 
              sélection rigoureuse de produits de haute qualité.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Notre mission est de rendre accessible l'excellence à travers une 
              gamme diversifiée de produits, du bijou raffiné aux dernières 
              innovations technologiques.
            </p>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-2xl font-bold text-indigo-600">1000+</p>
                <p className="text-gray-600">Clients Satisfaits</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <p className="text-2xl font-bold text-indigo-600">500+</p>
                <p className="text-gray-600">Produits</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};