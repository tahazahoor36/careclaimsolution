'use strict';

const { saveContactRequest } = require('../services/contactService');

/**
 * POST /api/contact
 *
 * Saves a consultation request.
 * Structured so that email notification logic can be appended after
 * `saveContactRequest` without touching the route or validation layers.
 */
const submitContact = async (req, res, next) => {
  try {
    const { firstName, lastName, email, phone, specialty, message } = req.body;

    const record = await saveContactRequest({
      firstName,
      lastName,
      email,
      phone,
      specialty,
      message,
    });

    // ── Email notification hook ─────────────────────────────────────────────
    // When ready, import and call your email service here, e.g.:
    //   await sendContactNotificationEmail({ firstName, lastName, email, message });
    // This does NOT block the response — wrap in a try/catch if you want
    // fire-and-forget behaviour.
    // ───────────────────────────────────────────────────────────────────────

    return res.status(201).json({
      success: true,
      message: 'Your request has been received. We will be in touch shortly.',
      data: { id: record.id },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = { submitContact };
