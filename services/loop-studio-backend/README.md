# Crayons Loop Studio Backend

Internal backend for the Crayons Loop Studio AI Content Factory.

## Contract

`IDEA -> PLAN -> GENERATE -> ASSEMBLE -> QA -> APPROVE -> PUBLISH -> ANALYZE -> GROW`

## Hard constraints

- Internal product only.
- Free-first: no mandatory paid AI/API provider.
- Local/open-source engines are preferred.
- Official YouTube/Meta APIs only for publishing and analytics.
- No quota bypassing.
- No automatic paid fallback.
- Rights/license evidence is required for external media assets.
- Every material action is auditable.
- Reuse verified capabilities before creating new ones.

## Backend domains

- projects
- content jobs
- media assets
- scenes and edit plans
- audio jobs
- subtitles
- thumbnails
- metadata
- QA gates
- approvals
- publishing destinations
- analytics snapshots
- growth recommendations
- revenue observations
- agents
- capabilities
- executions
- audit events

## Runtime boundary

GitHub is the source of truth for backend code, contracts and configuration.
YepCode is the execution layer for isolated media/API jobs when the connected workspace is authorized.
MCP/ENTE is the control plane and agent orchestration boundary.

The backend must remain useful without YepCode by exposing deterministic job contracts and queue states.
