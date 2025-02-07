/*
  # Schéma initial pour l'e-commerce Pegasus

  1. Nouvelles Tables
    - products (produits)
    - categories (catégories)
    - orders (commandes)
    - order_items (articles commandés)
    - profiles (profils utilisateurs)

  2. Sécurité
    - RLS activé sur toutes les tables
    - Politiques pour la lecture/écriture
*/

-- Création de la table des catégories
CREATE TABLE categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Création de la table des produits
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price integer NOT NULL,
  image_url text,
  category_id uuid REFERENCES categories(id),
  stock integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Création de la table des profils
CREATE TABLE profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  full_name text,
  address text,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Création de la table des commandes
CREATE TABLE orders (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  status text DEFAULT 'pending',
  total_amount integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Création de la table des articles commandés
CREATE TABLE order_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid REFERENCES orders(id),
  product_id uuid REFERENCES products(id),
  quantity integer NOT NULL,
  unit_price integer NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Activation RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;

-- Politiques RLS

-- Catégories: lecture publique
CREATE POLICY "Categories are viewable by everyone" ON categories
  FOR SELECT USING (true);

-- Produits: lecture publique
CREATE POLICY "Products are viewable by everyone" ON products
  FOR SELECT USING (true);

-- Profils: lecture/écriture pour le propriétaire
CREATE POLICY "Users can view own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users can update own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

-- Commandes: lecture/écriture pour le propriétaire
CREATE POLICY "Users can view own orders" ON orders
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users can insert own orders" ON orders
  FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Articles commandés: lecture pour le propriétaire de la commande
CREATE POLICY "Users can view own order items" ON order_items
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM orders
      WHERE orders.id = order_items.order_id
      AND orders.user_id = auth.uid()
    )
  );