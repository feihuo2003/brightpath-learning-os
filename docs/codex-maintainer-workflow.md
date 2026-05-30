# Codex Maintainer Workflow

BrightPath is maintained with Codex-assisted development.

## Useful Codex Tasks

- inspect privacy-sensitive diffs before release
- run layout and lesson-flow regressions
- generate release notes
- refactor repeated subject-studio patterns
- audit progress API contracts
- write demo-safe sample lessons
- summarize failed Playwright traces

## Guardrails

Codex should not:

- publish private assets
- expose credentials
- replace parent or teacher review for generated child curriculum
- turn hints into full answer dumping
- change privacy boundaries without human review

## Release Checklist

1. Run lint and build.
2. Run desktop and mobile layout regression.
3. Run lesson-flow regression.
4. Run privacy-boundary regression.
5. Review changed files for private names, assets, and secrets.
6. Tag release only after privacy checks pass.

