'use strict';

const supabase = require('../config/supabase');

/**
 * Persists a validated contact form submission to Supabase.
 *
 * The returned object includes the new row's `id` so the controller
 * can pass it to any downstream notification hooks (e.g. email).
 *
 * @param {{ firstName: string, lastName: string, email: string, phone?: string, specialty?: string, message: string }} payload
 * @returns {Promise<{ id: string, created_at: string }>}
 */
async function saveContactRequest(payload) {
  const { data, error } = await supabase
    .from('contact_requests')
    .insert([
      {
        first_name: payload.firstName,
        last_name: payload.lastName,
        email: payload.email.toLowerCase().trim(),
        phone: payload.phone || null,
        specialty: payload.specialty || null,
        message: payload.message,
      },
    ])
    .select('id, created_at')
    .single();

  if (error) {
    throw new Error(`[ContactService] Supabase insert failed: ${error.message}`);
  }

  return data;
}

module.exports = { saveContactRequest };
