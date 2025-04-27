# Frontend Preparation for Supabase Backend Integration

This guide details the steps to prepare your frontend for integration with a Supabase backend.

---

## 🛠️ 1. Checklist for Frontend Setup

| Area                      | Requirement                           | Notes                                 |
| :------------------------ | :------------------------------------ | :------------------------------------ |
| **User Authentication**   | Connect to Supabase Auth              | Users must login/signup               |
| **State Management**      | Track user session/token              | Must know if user is logged in        |
| **API/DB Access**         | Ability to call Supabase (client SDK) | Query dynamic data and send form data |
| **File Upload**           | Upload files to Supabase Storage      | Needs file picker & upload            |
| **Environment Variables** | Supabase URL + Anon Key               | Securely loaded in frontend           |

---

## ✨ 2. Detailed Instructions for Frontend Preparation

### Step 1: Install Supabase Client SDK

```bash
npm install @supabase/supabase-js
```

or

```bash
yarn add @supabase/supabase-js
```

### Step 2: Setup Supabase Client Connection

Create a helper to initialize Supabase (`lib/supabaseClient.js`):

```javascript
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**Note**: Use `NEXT_PUBLIC_` or `VITE_` prefix for environment variables.

### Step 3: Configure Environment Variables

In your `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```

### Step 4: Authentication Hooks (Login, Signup, Logout)

```javascript
// signup
const signUp = async (email, password) => {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  return user;
};

// login
const signIn = async (email, password) => {
  const { user, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;
  return user;
};

// logout
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
};
```

### Step 5: Session Management

Listen to auth state changes:

```javascript
import { supabase } from "./supabaseClient";

supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth event:", event);
  console.log("Session:", session);
});
```

### Step 6: Query and Submit Data (Forms)

Fetch user-specific dynamic content:

```javascript
const fetchUserData = async () => {
  const { data, error } = await supabase
    .from("your_table")
    .select("*")
    .eq("user_id", supabase.auth.user().id);

  if (error) throw error;
  return data;
};
```

Submit form data:

```javascript
const submitForm = async (formValues) => {
  const { data, error } = await supabase
    .from("forms")
    .insert([{ ...formValues, user_id: supabase.auth.user().id }]);

  if (error) throw error;
  return data;
};
```

### Step 7: Upload Files

Upload files to Supabase Storage:

```javascript
const uploadFile = async (file) => {
  const { data, error } = await supabase.storage
    .from("your-bucket")
    .upload(`user_uploads/${supabase.auth.user().id}/${file.name}`, file);

  if (error) throw error;
  return data;
};
```

---

## 🚀 3. Frontend Structure Summary

```bash
/frontend
  ├── lib/
  │     └── supabaseClient.js   # Supabase setup
  ├── hooks/
  │     └── useAuth.js          # Custom hooks for auth (optional)
  ├── pages/
  │     ├── login.js            # Login page
  │     ├── signup.js           # Signup page
  │     ├── dynamic-content.js  # Fetching secured content
  │     └── form.js             # Form submit page
  └── .env.local                # Env vars for Supabase URL & Key
```

---

## 🧹 4. Things NOT To Forget

- [ ] Protect private routes.
- [ ] Use loading states for auth actions.
- [ ] Handle Supabase errors properly.
- [ ] Never expose sensitive backend secrets.
- [ ] Plan for refresh tokens for long sessions.
- [ ] Deploy environment variables safely on Vercel.

---

## 🏁 5. When You're Done

You can then set up your Supabase backend:

- Create database tables.
- Configure Auth settings.
- Create Storage buckets.
- Setup Row Level Security (RLS) policies.

---

## 🧪 Summary

| Step                          | Purpose                      |
| :---------------------------- | :--------------------------- |
| Install Supabase SDK          | Communicate with backend     |
| Setup environment vars        | Connect securely             |
| Implement auth flows          | Manage users                 |
| Manage session state          | Keep user logged in          |
| Prepare API helpers           | Fetch/insert dynamic content |
| Prepare file upload functions | Upload files safely          |

---
