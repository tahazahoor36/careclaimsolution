'use strict';

// Vercel serverless entry point.
// Loads env from .env locally; on Vercel, env vars come from the dashboard.
require('dotenv').config();

const app = require('../src/app');

// Export the Express app — Vercel's @vercel/node runtime wraps it as a
// serverless function automatically.
module.exports = app;
