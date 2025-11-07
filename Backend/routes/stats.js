import express from 'express';
import Startup from '../models/Startup.js';
import User from '../models/User.js';

const router = express.Router();

// Get public statistics (no authentication required)
router.get('/public', async (req, res) => {
  try {
    const totalStartups = await Startup.countDocuments();
    const approvedStartups = await Startup.countDocuments({ verificationStatus: 'approved' });
    const totalUsers = await User.countDocuments();
    
    res.json({
      startupsRegistered: totalStartups,
      approvalsGranted: approvedStartups,
      activeUsers: totalUsers
    });
  } catch (error) {
    console.error('Error fetching public stats:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;










