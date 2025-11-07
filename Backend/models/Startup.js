import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const startupSchema = new mongoose.Schema({
  founderName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  startupName: {
    type: String,
    required: true,
    trim: true
  },
  ayushSystem: {
    type: String,
    enum: ['Ayurveda', 'Yoga', 'Unani', 'Siddha', 'Homeopathy'],
    required: true
  },
  registrationNumber: {
    type: String,
    required: true,
    trim: true
  },
  establishmentDate: {
    type: Date,
    required: true
  },
  address: {
    type: String,
    required: true,
    trim: true
  },
  teamSize: {
    type: String,
    required: true
  },
  businessModel: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  documents: [{
    name: String,
    type: String,
    size: Number,
    path: String
  }],
  digiLockerVerified: {
    type: Boolean,
    default: false
  },
  verificationStatus: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  reviewedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Admin',
    default: null
  },
  reviewDate: {
    type: Date,
    default: null
  },
  reviewComments: {
    type: String,
    trim: true,
    default: ''
  },
  notificationSent: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Hash password before saving
startupSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
startupSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Startup = mongoose.model('Startup', startupSchema);

export default Startup;

