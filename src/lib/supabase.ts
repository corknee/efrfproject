import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://bokztatnsgeltamevslw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJva3p0YXRuc2dlbHRhbWV2c2x3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUxOTA0NjEsImV4cCI6MjA1MDc2NjQ2MX0.ino6oZW9HkyfIJAhaF0XiSKA92n_q0JlghKUgEAwg7Q';

export const supabase = createClient(supabaseUrl, supabaseKey);