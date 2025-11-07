# AYUSHEASE Backend API

Backend server for the AYUSHEASE platform providing authentication, startup registration, and admin management services.

## Setup Instructions

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the Backend directory:
```
PORT=5001
MONGODB_URI=mongodb+srv://your-connection-string
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
NODE_ENV=development
```

3. Create default admin account:
```bash
node scripts/createAdmin.js
```
Default credentials:
- Email: `admin@ayushease.com`
- Password: `admin123`
⚠️ **Change the password after first login!**

4. Start the server:
```bash
npm run dev
```

The server will run on `http://localhost:5001`

## API Endpoints

### Authentication Routes (`/api/auth`)

- **POST /api/auth/register** - Register a new user
  - Body: `{ fullName, email, mobile, ayushSystem, password, confirmPassword }`
  
- **POST /api/auth/login** - Login user
  - Body: `{ email, password }`

### Startup Routes (`/api/startup`)

- **POST /api/startup/register** - Register a new startup
  - Body: `{ founderName, startupName, email, phone, ayushSystem, registrationNumber, establishmentDate, address, teamSize, businessModel, description, password, confirmPassword }`

- **POST /api/startup/login** - Login startup
  - Body: `{ email, password }`

### Admin Routes (`/api/admin`)

- **POST /api/admin/login** - Admin login
  - Body: `{ email, password }`
  - Returns: `{ token, admin }`

- **GET /api/admin/dashboard/stats** - Get dashboard statistics
  - Headers: `Authorization: Bearer <token>`
  - Returns: `{ totalStartups, pendingStartups, approvedStartups, rejectedStartups, totalNotifications }`

- **GET /api/admin/startups/pending** - Get all pending startups
  - Headers: `Authorization: Bearer <token>`

- **GET /api/admin/startups** - Get all startups (with filters)
  - Headers: `Authorization: Bearer <token>`
  - Query params: `?status=pending&page=1&limit=10`

- **GET /api/admin/startups/:id** - Get single startup details
  - Headers: `Authorization: Bearer <token>`

- **POST /api/admin/startups/:id/approve** - Approve a startup
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ comments?: string }`

- **POST /api/admin/startups/:id/reject** - Reject a startup
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ comments: string }` (required)

- **GET /api/admin/notifications** - Get all notifications
  - Headers: `Authorization: Bearer <token>`

### Notification Routes (`/api/notifications`)

- **GET /api/notifications/startup/:email** - Get notifications for a startup
- **PUT /api/notifications/:id/read** - Mark notification as read

## Technologies Used

- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
- CORS for cross-origin requests

## Admin Features

- View dashboard statistics
- Review pending startup registrations
- Approve or reject startups with comments
- Automatic notification system for startups
- View all notifications sent to users
