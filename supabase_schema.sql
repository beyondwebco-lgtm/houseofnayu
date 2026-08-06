-- House of Nayu Production Schema

-- 1. Categories Table
CREATE TABLE IF NOT EXISTS public.categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL UNIQUE,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- 2. Products Table
CREATE TABLE IF NOT EXISTS public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  category_id UUID REFERENCES public.categories(id) ON DELETE RESTRICT,
  price NUMERIC(10, 2) NOT NULL,
  original_price NUMERIC(10, 2),
  description TEXT,
  fabric TEXT,
  craft TEXT,
  blouse_included BOOLEAN DEFAULT true,
  available_sizes TEXT[] DEFAULT ARRAY['XS', 'S', 'M', 'L', 'XL'],
  stock_quantity INT DEFAULT 10,
  is_featured BOOLEAN DEFAULT false,
  is_published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Product Media Table (Cloudflare R2 CDN Links)
CREATE TABLE IF NOT EXISTS public.product_media (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id UUID REFERENCES public.products(id) ON DELETE CASCADE,
  r2_key TEXT NOT NULL,
  cdn_url TEXT NOT NULL,
  media_type TEXT NOT NULL CHECK (media_type IN ('full', 'detail', 'blouse', 'gallery')),
  display_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.product_media ENABLE ROW LEVEL SECURITY;

-- Allow Public Read Access for Storefront
CREATE POLICY "Public Read Categories" ON public.categories FOR SELECT USING (true);
CREATE POLICY "Public Read Products" ON public.products FOR SELECT USING (is_published = true);
CREATE POLICY "Public Read Media" ON public.product_media FOR SELECT USING (true);
