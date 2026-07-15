'use strict';

/**
 * Global error handler. Must be registered last in app.js (after all routes).
 *
 * @param {Error} err
 * @param {import('express').Request}  req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next   // eslint-disable-line no-unused-vars
 */
const errorHandler = (err, req, res, next) => { // eslint-disable-line no-unused-vars
  // Log the full error server-side for debugging.
  console.error('[Error]', {
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack,
    path: req.path,
    method: req.method,
  });

  // CORS errors surface with a specific message — return 403.
  if (err.message && err.message.startsWith('CORS:')) {
    return res.status(403).json({ success: false, message: err.message });
  }

  // Generic 500 — never leak internal details to the client.
  res.status(500).json({
    success: false,
    message: 'An unexpected server error occurred. Please try again later.',
  });
};

module.exports = errorHandler;
