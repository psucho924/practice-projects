# 🔐 MERN Authentication System

A backend-oriented MERN authentication system with a minimal React frontend for user interaction.  
The project focuses on implementing real-world authentication workflows including email verification, OTP-based flows, and secure session handling.

---

## 🚀 Features

- User Registration with Welcome Email
- Secure Login using JWT (HTTP-only cookies)
- Email Verification using OTP
- Forgot Password functionality with OTP-based password reset
- Protected Routes using Authentication Middleware
- Minimal React frontend for:
  - Home
  - Login
  - Register
  - OTP Verification
- Backend-first architecture with clean separation of concerns

---

## 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB with Mongoose
- JSON Web Tokens (JWT)
- bcrypt for password hashing
- Nodemailer for sending emails and OTPs

### Frontend

- React
- Vite
- Tailwind CSS
- Axios

---

## 📂 Project Structure

mern-auth-system/
│
├── server/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ ├── utils/
│ ├── config/
│ └── index.js
│
├── client/
│ ├── src/
│ ├── components/
│ ├── pages/
│ └── main.jsx
│
└── README.md

---

## 🔐 Authentication Flow

### 1. User Registration

- User registers with email and password
- Password is hashed before saving
- Welcome email is sent
- Account is created as unverified

### 2. Email Verification (OTP)

- User requests verification OTP
- OTP is sent to registered email
- User verifies email using OTP

### 3. Login

- User logs in with valid credentials
- JWT is generated and stored in an HTTP-only cookie
- Secure authenticated session is established

### 4. Forgot Password

- User requests password reset
- OTP is sent to registered email
- OTP verification allows password reset

---

## 🧠 Security Practices

- Password hashing using bcrypt
- JWT stored in HTTP-only cookies
- Authentication data attached to `req.user`
- OTP expiration and validation
- Protected routes via middleware
- No sensitive data exposed to client

---

## ⚙️ Environment Variables

Create a `.env` file inside the `server` directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email_address
EMAIL_PASS=your_email_password
CLIENT_URL=http://localhost:5173



```
