# Project Specifications & Requirements

## 🎯 Project Overview

A web application for students to submit coding tasks, with a focus on security and simplicity. The application will be built using vanilla JavaScript without any frameworks.

## 👥 User Roles

- **Students**: The only user type for now
  - Can create and manage their profile
  - Can submit coding tasks
  - Can view their submission history

## 💾 Data Structure

### 1. Profile Data

```javascript
{
  id: string,          // Supabase auth user ID
  email: string,       // User's email
  full_name: string,   // Student's full name
  student_id: string,  // Student identification number
  created_at: string   // Account creation timestamp
}
```

### 2. Form Data (Task Submissions)

```javascript
{
  id: string,          // Unique submission ID
  user_id: string,     // Reference to student profile
  task_id: string,     // Reference to the task
  submission: string,  // The actual code/text submission
  submitted_at: string,// Submission timestamp
  status: string       // Submission status (pending, reviewed, etc.)
}
```

## 📁 File Storage Requirements

- **Type**: Text files only
- **Size Limit**: 50KB per file
- **Purpose**: Storing code submissions
- **Security**:
  - Only authenticated students can upload
  - Students can only access their own submissions
  - Files are stored in a structured format: `submissions/{user_id}/{task_id}/{timestamp}.txt`

## 🔒 Security Requirements

1. **Authentication**

   - Email/password based authentication
   - Session management with secure tokens
   - No social login required

2. **Data Protection**

   - Row Level Security (RLS) for all database tables
   - Input validation and sanitization
   - Secure file upload validation

3. **Environment Security**
   - Secure storage of Supabase credentials
   - No sensitive data in client-side code
   - Regular key rotation

## 🛠️ Technical Setup (Phase 1)

### Project Structure

```
project/
├── assets/           # Static assets
├── js/              # JavaScript modules
│   ├── auth/        # Authentication logic
│   ├── storage/     # File handling
│   └── utils/       # Utility functions
├── styles/          # CSS files
├── index.html       # Main entry point
├── profile.html     # Profile management
└── .env            # Environment variables
```

### Required Dependencies

```json
{
  "dependencies": {
    "@supabase/supabase-js": "^2.0.0"
  }
}
```

### Environment Variables

```env
SUPABASE_URL=your-project-url
SUPABASE_ANON_KEY=your-anon-key
```

## 📋 Implementation Priorities

1. **Authentication System**

   - User registration
   - Login/logout functionality
   - Session management
   - Password reset capability

2. **Profile Management**

   - Profile creation
   - Profile updates
   - Profile viewing

3. **File Handling**

   - File upload validation
   - Size limit enforcement
   - Secure storage structure

4. **Security Implementation**
   - RLS policies
   - Input validation
   - Error handling
   - Session security

## ⚠️ Important Notes

- No framework usage - pure vanilla JavaScript
- Focus on security and simplicity
- Database integration will be implemented later
- All API calls will be prepared but not connected initially
- File size limit strictly enforced at 50KB
- Text-only submissions for code tasks

## 📅 Next Steps

1. Set up project structure
2. Implement authentication system
3. Create profile management
4. Implement file handling
5. Add security measures
6. Prepare for future database integration
