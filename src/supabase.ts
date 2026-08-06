import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://kcwnavcdnecthvooqywb.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_Wd0NK4Wnybdoj_1-Kz8RIQ_4YuLIw0B';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

