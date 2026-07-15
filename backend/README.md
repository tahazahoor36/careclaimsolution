# CarePoint Medical Billing — Backend API

Minimal Node.js + Express backend for the CarePoint frontend.
Supports the two forms present in the frontend: a **consultation request** form
and a **newsletter subscribe** form.

---

## Stack

| Layer | Technology |
|---|---|
| Runtime | Node.js ≥ 18 |
| Framework | Express 4 |
| Database | Supabase (PostgreSQL) |
| Validation | express-validator |
| Rate Limiting | express-rate-limit |
| Security headers | Helmet |
| CORS | cors |

---

## Project Structure

```
backend/
├── src/
│   ├── app.js                        # Express app (middleware + routes)
│   ├── config/
│   │   └── supabase.js               # Supabase client singleton
│   ├── controllers/
│   │   ├── contactController.js      # POST /api/contact handler
│   │   └── newsletterController.js   # POST /api/newsletter/subscribe handler
│   ├── middleware/
│   │   ├── errorHandler.js           # Global error handler
│   │   ├── rateLimiter.js            # Global + form-specific limiters
│   │   └── validate.js               # express-validator result middleware
│   ├── routes/
│   │   ├── contact.js                # Route + validation rules
│   │   └── newsletter.js             # Route + validation rules
│   └── services/
│       ├── contactService.js         # Supabase insert for contact_requests
│       └── newsletterService.js      # Supabase upsert for newsletter_subscribers
├── supabase_migration.sql            # Run once in Supabase SQL Editor
├── server.js                         # Entry point
├── .env.example                      # Environment variable template
└── package.json
```

---

## Setup

### 1. Install dependencies

```bash
cd backend
npm install
```

### 2. Configure environment variables

```bash
cp .env.example .env
```

Edit `.env` and fill in:

| Variable | Where to find it |
|---|---|
| `SUPABASE_URL` | Supabase Dashboard → Project Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase Dashboard → Project Settings → API → Service role key |
| `CORS_ORIGIN` | The origin(s) your frontend is served from |
| `PORT` | Optional, defaults to `3000` |

### 3. Run the database migration

Open the **Supabase SQL Editor** and paste the contents of
`supabase_migration.sql`, then click **Run**.

This creates:
- `contact_requests` table
- `newsletter_subscribers` table
- Indexes and Row Level Security policies

### 4. Start the server

```bash
# Development (auto-restart on file changes)
npm run dev

# Production
npm start
```

---

## API Reference

### `GET /health`

Returns `200 { status: "ok" }`. Use for uptime monitoring.

---

### `POST /api/contact`

Saves a consultation request.

**Request body** (`application/json`):

```json
{
  "firstName": "Jane",
  "lastName":  "Doe",
  "email":     "jane@example.com",
  "phone":     "(555) 123-4567",
  "specialty": "Cardiology",
  "message":   "I need help with billing for my practice."
}
```

| Field | Required | Notes |
|---|---|---|
| `firstName` | ✅ | max 100 chars |
| `lastName` | ✅ | max 100 chars |
| `email` | ✅ | valid email format |
| `phone` | ❌ | valid phone format if provided |
| `specialty` | ❌ | one of: General Practice, Cardiology, Orthopedics, Other |
| `message` | ✅ | max 2000 chars |

**Success `201`:**
```json
{
  "success": true,
  "message": "Your request has been received. We will be in touch shortly.",
  "data": { "id": "uuid-of-new-row" }
}
```

**Validation error `422`:**
```json
{
  "success": false,
  "message": "Validation failed.",
  "errors": [{ "field": "email", "message": "Please provide a valid email address." }]
}
```

---

### `POST /api/newsletter/subscribe`

Subscribes an email address. Idempotent — submitting an existing email returns success.

**Request body** (`application/json`):

```json
{ "email": "jane@example.com" }
```

**Success `200`:**
```json
{ "success": true, "message": "You have been successfully subscribed to our newsletter." }
```

---

## Adding Email Notifications (Future)

The contact controller (`src/controllers/contactController.js`) has a clearly
marked comment block after `saveContactRequest()` where you can call an email
service:

```js
// ── Email notification hook ─────────────────────────────────────────────
// When ready, import and call your email service here, e.g.:
//   await sendContactNotificationEmail({ firstName, lastName, email, message });
// ───────────────────────────────────────────────────────────────────────
```

Recommended libraries: **Resend**, **Nodemailer + SMTP**, or **SendGrid**.

---

## Rate Limits

| Scope | Limit |
|---|---|
| All routes (global) | 100 req / 15 min / IP |
| Form submission routes | 10 req / 15 min / IP |

Configurable via `RATE_LIMIT_WINDOW_MS` and `RATE_LIMIT_MAX` in `.env`.
