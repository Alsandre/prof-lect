# Supabase Auth Setup Guide

## 🔐 Supabase Auth Overview

Supabase Auth provides:

- Email/password authentication
- Session management
- JWT token handling
- Password reset functionality
- User management

## 🛠️ Setup Steps

### 1. Project Setup in Supabase Dashboard

1. Create new project in Supabase
2. Get project URL and anon key
3. Configure email templates for:
   - Email verification
   - Password reset
   - Magic link (if needed)

### 2. Client-Side Implementation

```javascript
// auth.js
import { createClient } from "@supabase/supabase-js";

const supabase = createClient("YOUR_SUPABASE_URL", "YOUR_SUPABASE_ANON_KEY");

// Sign up
const signUp = async (email, password) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  return { data, error };
};

// Sign in
const signIn = async (email, password) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Sign out
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  return { error };
};

// Get current session
const getSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  return { session, error };
};

// Listen to auth changes
supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth event:", event);
  console.log("Session:", session);
});
```

### 3. Security Configuration

1. Enable email confirmations
2. Set password requirements
3. Configure session duration
4. Set up rate limiting

### 4. User Management

- Users are automatically created in the `auth.users` table
- Additional profile data can be stored in a separate `profiles` table
- Row Level Security (RLS) can be configured for data access

## 📋 Required Supabase Dashboard Settings

1. **Authentication > Settings**

   - Enable Email Auth
   - Set password requirements
   - Configure session duration

2. **Authentication > Email Templates**

   - Customize verification email
   - Customize password reset email

3. **Authentication > Providers**
   - Enable Email provider
   - Configure SMTP settings (if using custom email)

## 🔒 Security Best Practices

1. **Session Management**

   - Use secure session storage
   - Implement session refresh
   - Handle token expiration

2. **Password Security**

   - Enforce strong passwords
   - Implement rate limiting
   - Enable email verification

3. **Data Protection**
   - Use RLS policies
   - Validate user input
   - Sanitize data

## ⚠️ Important Notes

- Supabase handles all authentication logic
- We only need to implement the UI and client-side integration
- Session management is automatic
- Password reset flow is built-in
- Email templates can be customized
