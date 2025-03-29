import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://lsafwjcycyiirvuuyqnv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxzYWZ3amN5Y3lpaXJ2dXV5cW52Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NTk3NTMsImV4cCI6MjA1ODQzNTc1M30.5_0C2tc_CNjrx0sTCh3KTVo90nMfBQPZ2Qk5so_zsWM';

export const supabase = createClient(supabaseUrl, supabaseKey);