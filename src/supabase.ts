import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kcwnavcdnecthvooqywb.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Wd0NK4Wnybdoj_1-Kz8RIQ_4YuLIw0B';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface CategoryDB {
  id?: string;
  name: string;
  slug: string;
  color_code?: string;
  created_at?: string;
}

export interface ProductDB {
  id?: string;
  title: string;
  slug: string;
  category_name: string;
  price: number;
  original_price: number;
  color_name: string;
  color_hex: string;
  fabric: string;
  craft: string;
  description: string;
  image_url: string;
  available_sizes?: string[];
  is_published?: boolean;
}
