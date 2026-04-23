const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('../backend/config/db');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
connectDB();

// Routes
const authRoutes = require('../backend/routes/auth');
const userRoutes = require('../backend/routes/user');
const vendorRoutes = require('../backend/routes/vendor');
const dashboardRoutes = require('../backend/routes/dashboard');
const adminRoutes = require('../backend/routes/admin');
const publicRoutes = require('../backend/routes/public');
const vendorDashboardRoutes = require('../backend/routes/vendorDashboard');

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);
app.use('/api/vendor', vendorRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/public', publicRoutes);
app.use('/api/vendor-dashboard', vendorDashboardRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ message: 'EazyWed API Server', version: '1.0.0' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// Handle 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

module.exports = app;
