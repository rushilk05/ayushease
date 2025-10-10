import React, { useState } from 'react';
import {
  Box,
  Button,
  CircularProgress,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';

const sectors = ['Ayurveda', 'Yoga', 'Unani', 'Siddha', 'Homeopathy'];

const AyushRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    sector: '',
    address: '',
    documents: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Validate inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number must be 10 digits';
    }
    if (!formData.sector) newErrors.sector = 'Please select a sector';
    if (!formData.address.trim()) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, documents: e.target.files }));
  };

  // Simulate DigiLocker document upload
  const handleDigiLocker = () => {
    alert('Simulating DigiLocker document upload. In a real app, this would redirect to DigiLocker.');
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      // Simulate network request
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        console.log('Form submitted:', formData);
      }, 2000);
    }
  };

  return (
    <Box sx={styles.container}>
      <Typography variant="h4" gutterBottom sx={{ textAlign: 'center' }}>
        Ayush Sector Online Registration
      </Typography>

      {submitted ? (
        <Box sx={styles.successBox}>
          <Typography variant="h6" sx={{ color: '#155724' }}>
            Registration Successful! Thank you for registering.
          </Typography>
        </Box>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Full Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={Boolean(errors.name)}
            helperText={errors.name}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            error={Boolean(errors.email)}
            helperText={errors.email}
            margin="normal"
            required
          />

          <TextField
            fullWidth
            label="Phone Number"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            error={Boolean(errors.phone)}
            helperText={errors.phone}
            margin="normal"
            placeholder="10 digit number"
            required
          />

          <FormControl
            fullWidth
            margin="normal"
            error={Boolean(errors.sector)}
            required
          >
            <InputLabel>Sector</InputLabel>
            <Select
              name="sector"
              value={formData.sector}
              onChange={handleChange}
              label="Sector"
            >
              <MenuItem value="">
                <em>Select Sector</em>
              </MenuItem>
              {sectors.map((sec) => (
                <MenuItem key={sec} value={sec}>
                  {sec}
                </MenuItem>
              ))}
            </Select>
            {errors.sector && (
              <FormHelperText>{errors.sector}</FormHelperText>
            )}
          </FormControl>

          <TextField
            fullWidth
            label="Address"
            name="address"
            multiline
            rows={3}
            value={formData.address}
            onChange={handleChange}
            error={Boolean(errors.address)}
            helperText={errors.address}
            margin="normal"
            required
          />

          <Box sx={styles.uploadBox}>
            <Button variant="contained" component="label">
              Upload Documents (PDF, Images)
              <input
                type="file"
                multiple
                hidden
                onChange={handleFileChange}
                accept=".pdf,image/*"
              />
            </Button>
            <Typography variant="body2" sx={{ marginTop: 1 }}>
              {formData.documents
                ? `${formData.documents.length} file(s) selected`
                : 'No documents uploaded yet.'}
            </Typography>
          </Box>

          <Box sx={styles.buttonsContainer}>
            <Button
              variant="outlined"
              color="success"
              onClick={handleDigiLocker}
              sx={{ minWidth: 200 }}
            >
              Submit Documents via DigiLocker
            </Button>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ minWidth: 120 }}
              disabled={loading}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Register'
              )}
            </Button>
          </Box>
        </form>
      )}
    </Box>
  );
};

const styles = {
  container: {
    maxWidth: 600,
    margin: '50px auto',
    padding: 4,
    backgroundColor: '#fafafa',
    borderRadius: 2,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: "'Roboto', sans-serif",
  },
  uploadBox: {
    marginTop: 2,
    marginBottom: 3,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 1,
  },
  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 3,
  },
  successBox: {
    padding: 3,
    backgroundColor: '#d4edda',
    borderRadius: 2,
    textAlign: 'center',
  },
};

export default AyushRegistration;
