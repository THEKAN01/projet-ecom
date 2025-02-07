import React, { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ici, vous ajouteriez la logique pour enregistrer l'email
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="bg-indigo-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Restez informé de nos nouveautés
          </h2>
          <p className="mb-6">
            Inscrivez-vous à notre newsletter pour recevoir nos dernières offres
          </p>
          {subscribed ? (
            <div className="text-lg font-semibold">
              Merci pour votre inscription ! 🎉
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 px-4 py-2 rounded-l-lg text-gray-900"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 bg-white text-indigo-600 font-semibold rounded-r-lg hover:bg-gray-100"
                >
                  S'inscrire
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};