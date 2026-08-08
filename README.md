# Crayons Loop Platform

Shared monorepo for three intentionally separated surfaces:

- `www.crayonsloop.com` — public Crayons Loop entertainment experience.
- `moments.crayonsloop.com` — private-event product positioning for studios, clients and families.
- `admin.crayonsloop.com` — operations shell; privileged functionality must remain behind authenticated services.

## Production web release

The web layer now has:

- complete Next.js App Router roots for all three applications;
- static production exports for Cloudflare Pages;
- responsive premium OTT, Moments and Admin surfaces;
- Cloudflare `_headers` security policy files;
- static `healthz.txt` endpoints;
- CI that builds and verifies every deployable output;
- a fail-closed Cloudflare Pages deployment workflow.

Build all surfaces:

```bash
pnpm install --no-frozen-lockfile
pnpm build
```

Expected production artifacts:

- `apps/ott-web/out`
- `apps/moments-web/out`
- `apps/admin-cms/out`

## Production domain map

| Domain | App |
| --- | --- |
| `www.crayonsloop.com` | `apps/ott-web` |
| `moments.crayonsloop.com` | `apps/moments-web` |
| `admin.crayonsloop.com` | `apps/admin-cms` |

The GitHub deployment workflow expects these production credentials/settings:

- secret `CLOUDFLARE_ACCOUNT_ID`
- secret `CLOUDFLARE_API_TOKEN`
- variable `CLOUDFLARE_OTT_PROJECT`
- variable `CLOUDFLARE_MOMENTS_PROJECT`
- variable `CLOUDFLARE_ADMIN_PROJECT`

It fails before deployment when any required value is missing.

## Architecture boundary

The current release makes the public web surfaces deployable and secure-by-default. Authentication, private playback entitlements, video processing, storage/CDN bindings, billing and other privileged workflows are separate backend capabilities and must not be represented as live until their services and production tests are connected.

Existing architecture references remain in:

- `services/api/openapi.yaml`
- `packages/database/schema.sql`
