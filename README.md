# K9 Community

K9 Community is a ship-to-market dog-community website built with Vite, React, and TypeScript. The project now includes a research-backed launch surface, title-only issue intake automation, and the documentation expected for a fuller revvel-standard delivery.

## Features

- Responsive landing page with clear navigation, launch-model, membership, partner, and CTA sections
- Research-backed messaging for the market opportunity and go-to-market story
- Title-only issue intake acknowledgement workflow for lightweight work requests
- Focused UI smoke test with Vitest and Testing Library
- Deployment, brand, security, changelog, and go-to-market documentation

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

## Ship-to-market docs

- `CHANGELOG.md`
- `DEPLOYMENT_GUIDE.md`
- `GO_TO_MARKET.md`
- `BRAND_GUIDELINES.md`
- `SECURITY.md`
- `validate.py`

Run the repository validation checklist with:

```bash
python validate.py
```

## Automation

Scitor is the repository's support-intake bridge that turns incoming requests into GitHub issues. Title-only issues are treated as valid intake here: `.github/scitor.yaml` pins Scitor to GitHub Issues, and `.github/workflows/title-only-intake.yml` posts an acknowledgement when a work request arrives without a body.
