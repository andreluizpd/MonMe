const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load Config File
dotenv.config({ path: './config/config.env' });

// Route Files
const services = require('./routes/services');

// Connect to Database
connectDB();

const app = express();

// Dev logging middelware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routes

app.use('/api/v1/services', services);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on ${PORT}`.yellow.bold
  )
);

// Handle promisse unhandled rejections
process.on('unhandledRejection', (err, promisse) => {
  console.log(`Error: ${err.message}`.red);

  // Close server and exit process
  server.close(() => {
    process.exit(1);
  });
});
