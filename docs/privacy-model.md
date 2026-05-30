# Privacy Model

BrightPath is designed for child learning contexts. The public repository must
be safe by default.

## Rules

- Never publish real child photos, voice clips, writing samples, or progress.
- Never commit credentials or deployment metadata.
- Demo tenants use demo-safe sample data only.
- Public demos must not fetch private tenant progress.
- Public demos must not render private asset URLs.
- Frontend hiding is not a security boundary.

## Demo Tenant

The default demo identity is:

```text
tenant=demo-family
child=demo-child
profile=demo-child
```

Demo assets should live under:

```text
public/assets/tenants/demo-family/demo-child/
```

## Private Tenant Pattern

Private tenants should use server-side authorization before real public beta.
Query parameters are useful for local prototypes and demo routing, but they are
not sufficient as a security model for customer data.

## Release Check

Before publishing a public build, verify:

- no private photo URLs are reachable
- no private voice URLs are reachable
- no rendered links include private tenant IDs
- no progress API request reads a private learner from a demo host

