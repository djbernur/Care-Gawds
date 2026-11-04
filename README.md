# Care Gawds

The Care Gawds website: a caregiver marketplace connecting families with nannies, babysitters, and childcare providers, launching first in Southern California.

Built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional
npm run dev                  # http://localhost:3000
```

`npm run build` creates a production build, and `npm run lint` runs ESLint.

## Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/find-a-caregiver` | Search and filters. Shows a launch message until real listings exist. |
| `/caregivers/[slug]` | Caregiver profile. Only labeled example profiles exist today, and they are `noindex`. |
| `/become-a-caregiver` | Caregiver recruitment and application form |
| `/how-it-works` | Four-step overview and app preview |
| `/about` | Brand story, mission, and vision |
| `/help` | FAQ |
| `/login`, `/signup`, `/privacy`, `/terms`, `/safety`, `/contact`, `/caregiver-guidelines` | Placeholders until those features or documents are ready |

## Forms

- `POST /api/waitlist` handles the family launch list.
- `POST /api/caregiver-application` handles caregiver applications.

Both validate on the server and use a honeypot field, a minimum-time check, and (for applications) a basic rate limit. Submissions are forwarded as JSON to `WAITLIST_WEBHOOK_URL` / `CAREGIVER_APPLICATION_WEBHOOK_URL`. In production without those variables, the forms return a friendly "opening soon" message instead of discarding data.

## Content rules

- No ratings, reviews, or verification and background-check claims until those processes exist.
- Caregiver qualifications are labeled **Self-reported** unless verified.
- Real listings go in `liveCaregivers` in `src/data/caregivers.ts`. Example profiles appear in the directory only when `NEXT_PUBLIC_SHOW_DEMO_PROFILES=true`.

## Brand

Colors are defined in `src/app/globals.css`: Deep Purple `#42136B`, Royal Violet `#8216A6`, Soft Lavender `#F2E9FA`, Warm White `#FFFCFA`. The font is Plus Jakarta Sans. The logo in `src/components/Logo.tsx` is a development approximation pending the official brand file.

## Deployment

Deploy on Vercel by importing this repository. It needs no build settings beyond the defaults. Add the environment variables above in the Vercel project settings.
