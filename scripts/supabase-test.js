import { createClient } from '@supabase/supabase-js'

// Initialize Supabase client
const supabaseUrl = 'https://esjqascugsbpwdevvhca.supabase.co'
const supabaseAnonKey = 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzanFhc2N1Z3NicHdkZXZ2aGNhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3MzU1MjAsImV4cCI6MjA2MTMxMTUyMH0.GhED6u-BsPttDwrazA1gPFxzL_9CytfYwHXD5P29mdc'

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