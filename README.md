# BrightPath Learning OS

An open-source learning operating system for children: personalized course paths,
progress memory, review loops, rewards, parent dashboards, and privacy-safe
demo tenants.

BrightPath grew out of a private family learning system and is being generalized
into a reusable framework for families, educators, and builders who want more
than a generic homework chatbot.

## Why This Exists

General AI chat can answer questions, but children need structure:

- placement before instruction
- daily guided lessons
- hints instead of answer dumping
- review loops for weak skills
- parent-visible progress
- rewards tied to real learning
- strong separation between private child data and public demos

BrightPath is designed around that product loop.

## Core Loop

1. A child completes a placement flow.
2. The system assigns a starting point and focus areas.
3. The child works through daily guided lessons.
4. Mistakes and hard items are saved for review.
5. Progress, rewards, and recommended next steps sync to a parent dashboard.
6. Demo tenants never see private child photos, voice clips, or progress.

## Current Modules

The private flagship implementation currently includes:

- English / ELA studio
- Math acceleration studio
- Mandarin / Chinese heritage studio
- AI literacy and coding studio
- Parent dashboard and QA hub

This public repository will extract the reusable framework, contracts, examples,
and demo-safe implementation patterns without publishing private family data.

## What Will Be Open-Sourced

- architecture contracts
- tenant and learner identity model
- progress API contract
- curriculum catalog patterns
- reward and review loop design
- demo-safe sample lessons
- Playwright-style regression scenarios
- privacy checks for public demo deployments
- Codex-assisted maintenance workflows

## What Will Not Be Open-Sourced

- private child photos
- private voice clips
- real learner progress
- family-specific course records
- deployment secrets
- private Vercel, KV, Redis, or Blob credentials
- any private school, family, or medical information

## Status

Early extraction. The private implementation exists across multiple Vite/React
apps. This repository is the clean public home for the reusable framework.

## License

Apache-2.0. See [LICENSE](./LICENSE).

