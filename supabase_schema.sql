-- House of Nayu Updated Schema for Categories, Dynamic Color Palette, & R2 Media Links

-- 1. Categories Table (Dynamic Category Management)
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  color_code TEXT DEFAULT '#d4af37',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Seed Default 5 Categories
INSERT INTO public.categories (name, slug) VALUES
  ('Cotton Sarees', 'cotton-sarees'),
  ('Silk Sarees', 'silk-sarees'),
  ('Chiffon Sarees', 'chiffon-sarees'),
  ('Kota Sarees', 'kota-sarees'),
  ('Sico Sarees', 'sico-sarees')
ON CONFLICT (name) DO NOTHING;

-- 2. Products Table (Includes Color Swatch & Category Link)
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category_name TEXT NOT NULL,
  price NUMERIC(10, 2) NOT NULL,
  original_price NUMERIC(10, 2),
  color_name TEXT DEFAULT 'Gold',
  color_hex TEXT DEFAULT '#D4AF37',
  fabric TEXT,
  craft TEXT,
  description TEXT,
  image_url TEXT NOT NULL,
  available_sizes TEXT[] DEFAULT ARRAY['XS', 'S', 'M', 'L', 'XL'],
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow Public Read Categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Allow Public Insert Categories" ON public.categories FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow Public Read Products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Allow Public Insert Products" ON public.products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow Public Delete Products" ON public.products FOR DELETE USING (true);
