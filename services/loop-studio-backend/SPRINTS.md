# Crayons Loop Studio — Execution Sprints

Product definition:

> AI-powered content creation and production studio that turns an idea into publish-ready content and manages the entire lifecycle through distribution, growth and revenue.

## Execution law

Search GitHub -> reuse -> adapt -> wire -> verify -> ship. Build new code only for verified gaps.

## Sprint sequence

1. Foundation — API, DB, storage abstraction, jobs, audit, capability registry, agent registry, free-first policy.
2. Home + Auth — internal workspace, sessions, Creator/Studio/Admin permissions.
3. Creator Workspace — projects, assets, scenes, versions, drafts, final master.
4. AI Creator — idea -> research -> script -> storyboard -> content plan.
5. Video Studio — ingest, transform, assembly, effects, render and format variants.
6. Audio Studio — voice, cleanup, Foley, SFX, music, mix/master.
7. Subtitle Studio — transcription, captions, translation, burn-in and SRT/VTT export.
8. Packaging — thumbnails, titles, descriptions, chapters, tags, credits, SEO metadata.
9. Final QA — media, audio, captions, rights, metadata and publish-readiness gates.
10. YouTube Manager — OAuth, upload, metadata, thumbnails, captions, playlists, scheduling and updates.
11. Meta Distribution — Facebook/Instagram publishing and platform-specific variants.
12. Analytics — performance snapshots and content-level metrics.
13. Reach Agent — recommendations for titles, thumbnails, clips, timing and repurposing.
14. Revenue Agent — monetization/performance intelligence and opportunities.
15. MCP + Agent Factory — expose verified capabilities to the internal orchestration layer.
16. Production hardening — security, retries, observability, backups, deployment and release gates.

## First vertical slice

Home -> Auth -> New Project -> Upload/Idea -> AI content plan -> media job -> final master -> QA -> YouTube publish.

## Free-first law

- No mandatory paid AI provider.
- No automatic paid fallback.
- Local/open-source preferred.
- Official platform APIs only.
- No quota bypass.
- Rights/license evidence for external assets.
- Every action auditable.
