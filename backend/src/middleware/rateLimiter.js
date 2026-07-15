'use strict';

const rateLimit = require('express-rate-limit');

/**
 * Global rate limiter applied to all routes.
 * Defaults: 100 requests per 15 minutes per IP.
 */
const globalRateLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS, 10) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX, 10) || 100,
  standardHeaders: true,  // Return rate limit info in RateLimit-* headers
  legacyHeaders: false,   // Disable X-RateLimit-* headers
  message: {
    success: false,
    message: 'Too many requests. Please try again later.',
  },
});

/**
 * Stricter limiter for form submission endpoints.
 * 10 submissions per 15 minutes per IP — guards against form spam.
 */
const formRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many form submissions. Please try again in 15 minutes.',
  },
});

module.exports = { globalRateLimiter, formRateLimiter };
