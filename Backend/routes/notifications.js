import express from 'express';
import Notification from '../models/Notification.js';

const router = express.Router();

// Get notifications for a startup (by email)
router.get('/startup/:email', async (req, res) => {
  try {
    const notifications = await Notification.find({
      recipientType: 'startup',
      recipientEmail: req.params.email
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.json({
      count: notifications.length,
      notifications
    });
  } catch (error) {
    console.error('Error fetching notifications:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Mark notification as read
router.put('/:id/read', async (req, res) => {
  try {
    const notification = await Notification.findById(req.params.id);
    
    if (!notification) {
      return res.status(404).json({ error: 'Notification not found' });
    }

    notification.read = true;
    notification.readAt = new Date();
    await notification.save();

    res.json({ message: 'Notification marked as read', notification });
  } catch (error) {
    console.error('Error updating notification:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;










