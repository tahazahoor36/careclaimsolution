'use strict';

const { subscribeEmail } = require('../services/newsletterService');

/**
 * POST /api/newsletter/subscribe
 *
 * Subscribes an email address to the newsletter.
 * Idempotent — re-submitting an existing address returns success.
 */
const subscribe = async (req, res, next) => {
  try {
    const { email } = req.body;

    const { isNew } = await subscribeEmail(email);

    return res.status(200).json({
      success: true,
      message: isNew
        ? 'You have been successfully subscribed to our newsletter.'
        : 'This email is already subscribed.',
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { subscribe };
