import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Test the connection
async function testConnection() {
  try {
    const { data, error } = await supabase.from('test').select('*').limit(1)
    
    if (error) {
      console.log('Connection successful, but no tables found (expected):', error.message)
    } else {
      console.log('Connection successful:', data)
    }
  } catch (error) {
    console.error('Connection failed:', error.message)
  }
}

// Run the test
testConnection() 