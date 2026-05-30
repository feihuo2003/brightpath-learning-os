# Security Policy

BrightPath Learning OS is designed for child learning products, so privacy and
data isolation are core requirements.

## Reporting Issues

Please open a GitHub issue for non-sensitive bugs.

For sensitive privacy or security concerns, contact the maintainer privately
instead of publishing details in an issue.

## Scope

Security-sensitive areas include:

- tenant and child identity isolation
- progress API contracts
- demo/private asset separation
- accidental publication of child photos, voice clips, writing samples, or progress
- credential leakage

## Non-Goals

The public demo patterns in this repository are not a complete SaaS
authorization system. Real customer deployments should add server-side
authentication and authorization before handling private learner data.

