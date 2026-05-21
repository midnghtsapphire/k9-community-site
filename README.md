# K9 Community

K9 Community is a polished single-page website for a dog-focused community hub. It highlights local programs, rescue support, upcoming events, and membership perks in a fast Vite + React + TypeScript app.

## Features

- Responsive landing page with clear navigation and calls to action
- Program, event, membership, testimonial, and FAQ sections
- Title-only issue intake acknowledgement workflow for lightweight work requests
- Focused UI smoke test with Vitest and Testing Library

## Getting started

```bash
npm install
npm run dev
```

## Scripts

- `npm run dev` — start the local development server
- `npm run lint` — run ESLint
- `npm run test` — run the focused test suite
- `npm run build` — create a production build

## Automation

Scitor is the repository's support-intake bridge that turns incoming requests into GitHub issues. Title-only issues are treated as valid intake here: `.github/scitor.yaml` pins Scitor to GitHub Issues, and `.github/workflows/title-only-intake.yml` posts an acknowledgement when a work request arrives without a body.
