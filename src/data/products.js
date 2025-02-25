import { Product } from '../types/Product';

export const featuredProducts: Product[] = [
  {
    id: 1,
    name: "Collier en Or 18k",
    price: 196500,
    image: "/images/necklace.jpg",
    category: "Bijoux",
    description: "Magnifique collier en or 18 carats avec pendentif délicat",
    storeId: 1,
    views: 150,
    lastUpdated: "2024-01-15"
  },
  {
    id: 2,
    name: "iPhone 15 Pro",
    price: 655000,
    image: "/images/iphone.jpg",
    category: "Téléphones",
    description: "Le dernier iPhone avec appareil photo professionnel",
    storeId: 1,
    views: 300,
    lastUpdated: "2024-01-14"
  },
  {
    id: 3,
    name: "MacBook Air M2",
    price: 851500,
    image: "/images/macbook.jpg",
    category: "Ordinateurs",
    description: "Portable puissant avec une autonomie exceptionnelle",
    storeId: 2,
    views: 200,
    lastUpdated: "2024-01-13"
  }
];