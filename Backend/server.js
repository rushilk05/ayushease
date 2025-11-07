import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import startupRoutes from './routes/startup.js';
import adminRoutes from './routes/admin.js';
import notificationRoutes from './routes/notifications.js';
import statsRoutes from './routes/stats.js';

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  if (req.body && Object.keys(req.body).length > 0) {
    const logBody = { ...req.body };
    if (logBody.password) logBody.password = '***';
    if (logBody.confirmPassword) logBody.confirmPassword = '***';
    console.log('Request body:', logBody);
  }
  next();
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/startup', startupRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/stats', statsRoutes);

// Health check route
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AYUSHEASE Backend is running' });
});

// Start server only after DB connection
const start = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/ayushease';
    
    // Connect to MongoDB (modern Mongoose doesn't need deprecated options)
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(`Database: ${conn.connection.name}`);

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      console.log(`API Health Check: http://localhost:${PORT}/api/health`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    console.error('Please check your MONGODB_URI in .env file');
    process.exit(1);
  }
};

start();

