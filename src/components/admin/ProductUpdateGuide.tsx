import React from 'react';

export const ProductUpdateGuide: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Guide de Mise à Jour des Produits</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">1. Accéder à l'Interface d'Administration</h2>
          <p className="text-gray-600 mb-4">
            Connectez-vous à votre compte administrateur pour accéder au tableau de bord.
          </p>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="font-mono">👉 Allez sur: admin.pegazus.com</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">2. Sélectionner une Boutique</h2>
          <p className="text-gray-600 mb-4">
            Choisissez la boutique dont vous souhaitez mettre à jour les produits.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Cliquez sur "Gérer les Boutiques"</li>
            <li>Sélectionnez votre boutique dans la liste</li>
            <li>Accédez à la section "Produits"</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. Mettre à Jour les Produits</h2>
          <div className="space-y-4">
            <div className="bg-white p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Ajouter un Nouveau Produit</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Cliquez sur "Ajouter un Produit"</li>
                <li>Remplissez les informations du produit</li>
                <li>Ajoutez des photos de haute qualité</li>
                <li>Cliquez sur "Enregistrer"</li>
              </ol>
            </div>

            <div className="bg-white p-4 border rounded-lg">
              <h3 className="font-semibold mb-2">Modifier un Produit Existant</h3>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Trouvez le produit dans la liste</li>
                <li>Cliquez sur "Modifier"</li>
                <li>Mettez à jour les informations nécessaires</li>
                <li>Cliquez sur "Enregistrer les Modifications"</li>
              </ol>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Conseils Importants</h2>
          <div className="bg-blue-50 p-4 rounded-lg space-y-2">
            <p>✨ Utilisez des images de haute qualité (minimum 800x800px)</p>
            <p>✨ Rédigez des descriptions détaillées et précises</p>
            <p>✨ Vérifiez les prix avant publication</p>
            <p>✨ Mettez à jour régulièrement le stock</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Besoin d'Aide ?</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p className="mb-2">Contactez notre support technique :</p>
            <p>📧 support@pegazus.com</p>
            <p>📞 +123 456 789</p>
          </div>
        </section>
      </div>
    </div>
  );
};