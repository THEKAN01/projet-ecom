import { Store } from '../types/Store';

export const stores: Store[] = [
  {
    id: 1,
    name: "Pegazus Centre-ville",
    address: "123 Avenue Centrale, Paris",
    phone: "01 23 45 67 89",
    hours: {
      "Lundi": "9h - 19h",
      "Mardi": "9h - 19h",
      "Mercredi": "9h - 19h",
      "Jeudi": "9h - 19h",
      "Vendredi": "9h - 19h",
      "Samedi": "10h - 20h",
      "Dimanche": "Fermé"
    },
    coordinates: {
      lat: 48.8566,
      lng: 2.3522
    },
    products: [1, 2, 3]
  },
  {
    id: 2,
    name: "Pegazus Rive Gauche",
    address: "45 Boulevard Saint-Germain, Paris",
    phone: "01 98 76 54 32",
    hours: {
      "Lundi": "10h - 19h",
      "Mardi": "10h - 19h",
      "Mercredi": "10h - 19h",
      "Jeudi": "10h - 19h",
      "Vendredi": "10h - 19h",
      "Samedi": "10h - 20h",
      "Dimanche": "Fermé"
    },
    coordinates: {
      lat: 48.8539,
      lng: 2.3390
    },
    products: [1, 3]
  }
];