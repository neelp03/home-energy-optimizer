// backend/server.js
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const energyRoutes = require('./routes/energyRoutes');
const { connectDB } = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.use('/api/energy', energyRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
