import express from 'express';
import jwt from 'jsonwebtoken';
import Admin from '../models/Admin.js';
import Startup from '../models/Startup.js';
import Notification from '../models/Notification.js';

const router = express.Router();

// Middleware to verify admin token
const verifyAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this_in_production');
    const admin = await Admin.findById(decoded.adminId);
    
    if (!admin) {
      return res.status(401).json({ error: 'Invalid admin token' });
    }

    req.admin = admin;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

// Generate JWT Token for Admin
const generateToken = (adminId) => {
  return jwt.sign({ adminId }, process.env.JWT_SECRET || 'your_super_secret_jwt_key_change_this_in_production', {
    expiresIn: '30d'
  });
};

// Admin Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const admin = await Admin.findOne({ email: email.toLowerCase() });

    if (!admin) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(admin._id);

    res.json({
      message: 'Admin login successful',
      token,
      admin: {
        id: admin._id,
        name: admin.name,
        email: admin.email,
        role: admin.role
      }
    });
  } catch (error) {
    console.error('Admin login error:', error);
    res.status(500).json({ error: 'Server error during login' });
  }
});

// Get all pending startups
router.get('/startups/pending', verifyAdmin, async (req, res) => {
  try {
    const pendingStartups = await Startup.find({ verificationStatus: 'pending' })
      .select('-password')
      .sort({ createdAt: -1 });

    res.json({
      count: pendingStartups.length,
      startups: pendingStartups
    });
  } catch (error) {
    console.error('Error fetching pending startups:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get all startups (with filters)
router.get('/startups', verifyAdmin, async (req, res) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;
    const query = status ? { verificationStatus: status } : {};
    
    const startups = await Startup.find(query)
      .select('-password')
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit);

    const total = await Startup.countDocuments(query);

    res.json({
      startups,
      totalPages: Math.ceil(total / limit),
      currentPage: page,
      total
    });
  } catch (error) {
    console.error('Error fetching startups:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get single startup details
router.get('/startups/:id', verifyAdmin, async (req, res) => {
  try {
    const startup = await Startup.findById(req.params.id).select('-password');
    
    if (!startup) {
      return res.status(404).json({ error: 'Startup not found' });
    }

    res.json(startup);
  } catch (error) {
    console.error('Error fetching startup:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Approve startup
router.post('/startups/:id/approve', verifyAdmin, async (req, res) => {
  try {
    const { comments } = req.body;
    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      return res.status(404).json({ error: 'Startup not found' });
    }

    if (startup.verificationStatus !== 'pending') {
      return res.status(400).json({ error: 'Startup is not pending approval' });
    }

    startup.verificationStatus = 'approved';
    startup.reviewedBy = req.admin._id;
    startup.reviewDate = new Date();
    startup.reviewComments = comments || '';

    await startup.save();

    // Create notification
    const notification = new Notification({
      recipientType: 'startup',
      recipientId: startup._id,
      recipientEmail: startup.email,
      type: 'approval',
      title: 'Startup Registration Approved',
      message: `Congratulations! Your startup "${startup.startupName}" has been approved. ${comments ? 'Comments: ' + comments : ''}`,
      relatedStartup: startup._id
    });

    await notification.save();
    console.log('Notification created for startup approval:', startup.email);

    res.json({
      message: 'Startup approved successfully',
      startup: {
        id: startup._id,
        startupName: startup.startupName,
        verificationStatus: startup.verificationStatus,
        reviewDate: startup.reviewDate
      }
    });
  } catch (error) {
    console.error('Error approving startup:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Reject startup
router.post('/startups/:id/reject', verifyAdmin, async (req, res) => {
  try {
    const { comments } = req.body;
    
    if (!comments || comments.trim().length === 0) {
      return res.status(400).json({ error: 'Rejection comments are required' });
    }

    const startup = await Startup.findById(req.params.id);

    if (!startup) {
      return res.status(404).json({ error: 'Startup not found' });
    }

    if (startup.verificationStatus !== 'pending') {
      return res.status(400).json({ error: 'Startup is not pending approval' });
    }

    startup.verificationStatus = 'rejected';
    startup.reviewedBy = req.admin._id;
    startup.reviewDate = new Date();
    startup.reviewComments = comments;

    await startup.save();

    // Create notification
    const notification = new Notification({
      recipientType: 'startup',
      recipientId: startup._id,
      recipientEmail: startup.email,
      type: 'rejection',
      title: 'Startup Registration Rejected',
      message: `Your startup "${startup.startupName}" registration has been rejected. Reason: ${comments}`,
      relatedStartup: startup._id
    });

    await notification.save();
    console.log('Notification created for startup rejection:', startup.email);

    res.json({
      message: 'Startup rejected successfully',
      startup: {
        id: startup._id,
        startupName: startup.startupName,
        verificationStatus: startup.verificationStatus,
        reviewDate: startup.reviewDate
      }
    });
  } catch (error) {
    console.error('Error rejecting startup:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get notifications
router.get('/notifications', verifyAdmin, async (req, res) => {
  try {
    const notifications = await Notification.find()
      .sort({ createdAt: -1 })
      .limit(50);

    res.json({
      count: notifications.length,
      notifications
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get dashboard stats
router.get('/dashboard/stats', verifyAdmin, async (req, res) => {
  try {
    const totalStartups = await Startup.countDocuments();
    const pendingStartups = await Startup.countDocuments({ verificationStatus: 'pending' });
    const approvedStartups = await Startup.countDocuments({ verificationStatus: 'approved' });
    const rejectedStartups = await Startup.countDocuments({ verificationStatus: 'rejected' });
    const totalNotifications = await Notification.countDocuments();

    res.json({
      totalStartups,
      pendingStartups,
      approvedStartups,
      rejectedStartups,
      totalNotifications
    });
  } catch (error) {
    console.error('Error fetching dashboard stats:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;










