import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema({
  recipientType: {
    type: String,
    enum: ['user', 'startup'],
    required: true
  },
  recipientId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  recipientEmail: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['approval', 'rejection', 'pending_review'],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  relatedStartup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Startup',
    default: null
  },
  read: {
    type: Boolean,
    default: false
  },
  readAt: {
    type: Date,
    default: null
  }
}, {
  timestamps: true
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;










