# AYUSHEASE Platform

A comprehensive platform for AYUSH (Ayurveda, Yoga, Unani, Siddha, Homeopathy) practitioners and startups.

## Project Structure

```
ayushease/
├── Frontend/          # React frontend application
└── Backend/           # Node.js/Express backend API
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### Backend Setup

1. Navigate to the Backend directory:
```bash
cd Backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the Backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/ayushease
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

**Note:** If using MongoDB Atlas, replace `MONGODB_URI` with your Atlas connection string.

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the Frontend directory:
```bash
cd Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (or the port Vite assigns)

## Features

### User Registration & Login
- User registration with AYUSH system selection
- Secure password hashing
- JWT-based authentication
- Login with email or mobile number

### Startup Registration
- Multi-step registration form
- Business information collection
- Document upload support
- DigiLocker integration (simulated)
- Verification status tracking

## API Endpoints

### Authentication (`/api/auth`)
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user

### Startup (`/api/startup`)
- `POST /api/startup/register` - Register a new startup
- `POST /api/startup/login` - Login startup

## Technologies Used

### Frontend
- React 19
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT (JSON Web Tokens)
- bcryptjs (password hashing)
- CORS

## Development

### Running Both Servers

Open two terminal windows:

**Terminal 1 - Backend:**
```bash
cd Backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd Frontend
npm run dev
```

## Notes

- Make sure MongoDB is running before starting the backend
- The backend uses port 5000 by default
- JWT tokens are stored in localStorage after successful login/registration
- All passwords are hashed using bcrypt before storage










