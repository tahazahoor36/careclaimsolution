'use strict';

const { Router } = require('express');
const { body } = require('express-validator');

const validate = require('../middleware/validate');
const { formRateLimiter } = require('../middleware/rateLimiter');
const { submitContact } = require('../controllers/contactController');

const router = Router();

/**
 * Validation rules for the contact form.
 * Maps directly to the fields present in carepoint_contact_us_refined/code.html.
 */
const contactValidation = [
  body('firstName')
    .trim()
    .notEmpty().withMessage('First name is required.')
    .isLength({ max: 100 }).withMessage('First name must not exceed 100 characters.'),

  body('lastName')
    .trim()
    .notEmpty().withMessage('Last name is required.')
    .isLength({ max: 100 }).withMessage('Last name must not exceed 100 characters.'),

  body('email')
    .trim()
    .notEmpty().withMessage('Email address is required.')
    .isEmail().withMessage('Please provide a valid email address.')
    .normalizeEmail(),

  body('phone')
    .optional({ checkFalsy: true })
    .trim()
    .isMobilePhone('any', { strictMode: false })
    .withMessage('Please provide a valid phone number.'),

  body('specialty')
    .optional({ checkFalsy: true })
    .trim()
    .isIn(['', 'General Practice', 'Cardiology', 'Orthopedics', 'Other'])
    .withMessage('Please select a valid medical specialty.'),

  body('message')
    .trim()
    .notEmpty().withMessage('Message is required.')
    .isLength({ max: 2000 }).withMessage('Message must not exceed 2000 characters.'),
];

/**
 * POST /api/contact
 * Apply stricter form rate limiter, validate, then hand off to controller.
 */
router.post('/', formRateLimiter, contactValidation, validate, submitContact);

module.exports = router;
