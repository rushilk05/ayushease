import express from 'express';
import jwt from 'jsonwebtoken';
import Startup from '../models/Startup.js';

const router = express.Router();

// Generate JWT Token
const generateToken = (startupId) => {
  return jwt.sign({ startupId }, process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this_in_production', {
    expiresIn: '30d'
  });
};

// Register Startup
router.post('/register', async (req, res) => {
  try {
    const {
      founderName,
      startupName,
      email,
      phone,
      ayushSystem,
      registrationNumber,
      establishmentDate,
      address,
      teamSize,
      businessModel,
      description,
      password,
      confirmPassword,
      digiLockerVerified
    } = req.body;

    // Validation
    if (!founderName || !startupName || !email || !phone || !ayushSystem || 
        !registrationNumber || !establishmentDate || !address || !teamSize || 
        !businessModel || !description || !password || !confirmPassword) {
      return res.status(400).json({ error: 'All required fields must be filled' });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ error: 'Passwords do not match' });
    }

    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }

    // Check if startup already exists
    const existingStartup = await Startup.findOne({ email });
    if (existingStartup) {
      return res.status(400).json({ error: 'Startup with this email already exists' });
    }

    // Create new startup
    const startup = new Startup({
      founderName,
      startupName,
      email,
      phone,
      ayushSystem,
      registrationNumber,
      establishmentDate,
      address,
      teamSize,
      businessModel,
      description,
      password,
      digiLockerVerified: digiLockerVerified || false,
      verificationStatus: 'pending'
    });

    await startup.save();

    // Generate token
    const token = generateToken(startup._id);

    res.status(201).json({
      message: 'Startup registered successfully',
      token,
      startup: {
        id: startup._id,
        founderName: startup.founderName,
        startupName: startup.startupName,
        email: startup.email,
        phone: startup.phone,
        ayushSystem: startup.ayushSystem,
        verificationStatus: startup.verificationStatus
      }
    });
  } catch (error) {
    console.error('Startup registration error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ error: 'Startup with this email already exists' });
    }
    res.status(500).json({ error: 'Server error during startup registration' });
  }
});

// Login Startup
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    // Find startup by email or phone
    const startup = await Startup.findOne({
      $or: [
        { email: email.toLowerCase() },
        { phone: email }
      ]
    });

    if (!startup) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Check password
    const isPasswordValid = await startup.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    // Generate token
    const token = generateToken(startup._id);

    res.json({
      message: 'Login successful',
      token,
      startup: {
        id: startup._id,
        founderName: startup.founderName,
        startupName: startup.startupName,
        email: startup.email,
        phone: startup.phone,
        ayushSystem: startup.ayushSystem,
        verificationStatus: startup.verificationStatus
      }
    });
  } catch (error) {
    console.error('Startup login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// Get startup profile (authenticated)
router.get('/profile', async (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this_in_production');
    const startup = await Startup.findById(decoded.startupId).select('-password');
    
    if (!startup) {
      return res.status(404).json({ error: 'Startup not found' });
    }

    res.json(startup);
  } catch (error) {
    console.error('Error fetching startup profile:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;

