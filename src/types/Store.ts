export interface Store {
  id: number;
  name: string;
  address: string;
  phone: string;
  hours: {
    [key: string]: string;
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  products: number[]; // IDs des produits disponibles dans cette boutique
}