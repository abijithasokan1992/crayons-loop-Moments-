# Crayons Loop Platform

Shared platform monorepo for two separate products:

- `www.crayonsloop.com` — premium public OTT positioned in the Netflix / Prime Video category, supporting SVOD, TVOD and AVOD.
- `moments.crayonsloop.com` — private wedding and function-video streaming for studios, clients and families.
- `admin.crayonsloop.com` — central CMS and operations control surface.

## Architecture

One shared backend, media pipeline, authentication, billing and database layer. Separate OTT, Moments and CMS frontends. Product and tenant boundaries must be enforced in permissions and data access.

## Workspace

- `apps/ott-web`
- `apps/moments-web`
- `apps/admin-cms`
- `services/api/openapi.yaml`
- `packages/database/schema.sql`

This commit is the executable foundation, not a production-complete release. Video processing, authentication, payment provider, storage/CDN, UI flows, tests and deployment integrations remain active implementation work.
