-- ─────────────────────────────────────────────────────────────────────────────
-- CarePoint Medical Billing — Supabase Database Schema
-- Run this in: Supabase Dashboard → SQL Editor
-- ─────────────────────────────────────────────────────────────────────────────

-- Enable the pgcrypto extension for UUID generation (enabled by default on
-- Supabase, but included here for completeness).
CREATE EXTENSION IF NOT EXISTS "pgcrypto";


-- ─── contact_requests ─────────────────────────────────────────────────────────
-- Stores consultation / contact form submissions from the frontend.

CREATE TABLE IF NOT EXISTS public.contact_requests (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name   TEXT        NOT NULL CHECK (char_length(first_name) BETWEEN 1 AND 100),
  last_name    TEXT        NOT NULL CHECK (char_length(last_name)  BETWEEN 1 AND 100),
  email        TEXT        NOT NULL CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  phone        TEXT,
  specialty    TEXT        CHECK (specialty IN ('General Practice', 'Cardiology', 'Orthopedics', 'Other')),
  message      TEXT        NOT NULL CHECK (char_length(message) BETWEEN 1 AND 2000),
  created_at   TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index for lookups by email (e.g. future admin queries)
CREATE INDEX IF NOT EXISTS idx_contact_requests_email
  ON public.contact_requests (email);

-- Restrict direct table access: backend uses service role key,
-- which bypasses RLS, so this is a safety guard for other roles.
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- Deny all access to the anon/authenticated roles.
-- The service role bypasses RLS entirely.
CREATE POLICY "no_public_access" ON public.contact_requests
  AS RESTRICTIVE FOR ALL
  TO anon, authenticated
  USING (false);


-- ─── newsletter_subscribers ───────────────────────────────────────────────────
-- Stores newsletter email subscriptions from the footer form.

CREATE TABLE IF NOT EXISTS public.newsletter_subscribers (
  id           UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  email        TEXT        NOT NULL UNIQUE CHECK (email ~* '^[^@]+@[^@]+\.[^@]+$'),
  subscribed_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "no_public_access" ON public.newsletter_subscribers
  AS RESTRICTIVE FOR ALL
  TO anon, authenticated
  USING (false);
