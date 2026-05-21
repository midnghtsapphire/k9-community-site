# Security

## Scope

This repository currently contains a static frontend and GitHub automation for issue intake acknowledgement.

## Security principles

- No secrets committed to source control
- Minimal GitHub Actions permissions
- No untrusted user input is rendered into the shipped site
- Production artifacts are generated from versioned source with repeatable build commands

## Current posture

- The site is static and has no backend credential handling
- The issue-intake workflow uses the default `GITHUB_TOKEN`
- The workflow only posts a canned acknowledgement message and does not execute issue content as code

## Secure development checklist

- Run `npm run lint`
- Run `npm run test`
- Run `npm run build`
- Run `python validate.py`
- Review dependency updates before merging

## If future integrations are added

For forms, checkout, login, or APIs:

- use server-side secret storage
- validate and sanitize all inputs
- add authentication and authorization boundaries
- avoid exposing administrative functionality in the client without a backend guardrail

## Reporting

If you discover a security issue in this repository, report it privately to the repository owner instead of opening a public issue with exploit details.
