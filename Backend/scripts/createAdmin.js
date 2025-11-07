import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from '../models/Admin.js';

dotenv.config();

const createDefaultAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@ayushease.com' });
    
    if (existingAdmin) {
      console.log('Default admin already exists');
      process.exit(0);
    }

    // Create default admin
    const admin = new Admin({
      name: 'Admin User',
      email: 'admin@ayushease.com',
      password: 'admin123', // Change this password after first login
      role: 'admin'
    });

    await admin.save();
    console.log('Default admin created successfully!');
    console.log('Email: admin@ayushease.com');
    console.log('Password: admin123');
    console.log('⚠️  Please change the password after first login!');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin:', error);
    process.exit(1);
  }
};

createDefaultAdmin();










