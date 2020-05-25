const express = require('express');
const dotenv = require('dotenv');

// Route Files
const services = require('./routes/services');

// Load Config File
dotenv.config({ path: './config/config.env' });

const app = express();

// Mount routes
app.use('/api/v1/services', services);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on ${PORT}`)
);
