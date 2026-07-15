'use strict';

const { Router } = require('express');
const { body } = require('express-validator');

const validate = require('../middleware/validate');
const { formRateLimiter } = require('../middleware/rateLimiter');
const { subscribe } = require('../controllers/newsletterController');

const router = Router();

/**
 * Validation rules for the newsletter subscription form.
 * Only an email field is present in the frontend footer form.
 */
const newsletterValidation = [
  body('email')
    .trim()
    .notEmpty().withMessage('Email address is required.')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail()
    .isLength({ max: 254 }).withMessage('Email address is too long.'),
];

/**
 * POST /api/newsletter/subscribe
 */
router.post('/subscribe', formRateLimiter, newsletterValidation, validate, subscribe);

module.exports = router;
