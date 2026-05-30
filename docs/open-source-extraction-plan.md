# Open Source Extraction Plan

This plan converts the private Iris Learning implementation into a public,
demo-safe open-source project.

## Do Not Publish Directly

The current private implementation includes real family context and must not be
made public as-is.

Private materials to exclude:

- real child photos under `public/assets/pics/`
- private voice clips under `public/assets/voices/iris-family/`
- real progress records or cloud snapshots
- `.env*`, `.vercel/`, KV, Redis, Blob, or API credentials
- private Vercel project links used for Iris production
- family-specific names in public sample data

## Public Extraction Targets

### 1. Architecture

- learner identity model
- tenant/child separation
- curriculum catalog model
- progress API contract
- reward and review state model

### 2. Demo App

- one demo dashboard
- one minimal subject studio
- demo-safe sample child
- fake progress state
- no private media

### 3. QA Harness

- desktop and mobile layout checks
- placement flow regression
- lesson completion regression
- review item persistence check
- demo privacy check

### 4. Documentation

- README
- privacy model
- architecture contract
- contributing guide
- Codex maintainer workflow

## Suggested Repository Structure

```text
brightpath-learning-os/
  apps/
    dashboard/
    demo-studio/
  packages/
    curriculum/
    progress/
    rewards/
    identity/
  scripts/
    qa/
  docs/
    architecture.md
    privacy-model.md
    codex-maintainer-workflow.md
```

## First Public Milestone

A small but honest OSS release:

- public README and license
- architecture docs
- type definitions for identity, curriculum, progress, and rewards
- one demo-safe lesson flow
- one placement-to-personalized-course example
- one reward-after-completion example
- one Playwright privacy regression

This is enough to show real maintainership without exposing private data.
