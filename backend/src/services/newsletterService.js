'use strict';

const supabase = require('../config/supabase');

/**
 * Subscribes an email address to the newsletter.
 *
 * Uses an upsert with `ignoreDuplicates: true` so re-submitting an
 * existing email is idempotent — the endpoint returns success either way.
 *
 * @param {string} email
 * @returns {Promise<{ isNew: boolean }>}
 */
async function subscribeEmail(email) {
  const normalised = email.toLowerCase().trim();

  // Check whether this email already exists before upserting so we can
  // inform the controller (and eventually the response) whether it's new.
  const { data: existing } = await supabase
    .from('newsletter_subscribers')
    .select('id')
    .eq('email', normalised)
    .maybeSingle();

  if (existing) {
    // Already subscribed — return without re-inserting.
    return { isNew: false };
  }

  const { error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email: normalised }]);

  if (error) {
    // Unique constraint violation means a concurrent insert beat us to it.
    // Treat as success.
    if (error.code === '23505') {
      return { isNew: false };
    }
    throw new Error(`[NewsletterService] Supabase insert failed: ${error.message}`);
  }

  return { isNew: true };
}

module.exports = { subscribeEmail };
