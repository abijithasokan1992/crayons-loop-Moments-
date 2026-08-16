-- Crayons Loop Studio internal backend schema.
-- PostgreSQL-compatible. No secrets are stored here.

create extension if not exists pgcrypto;

create table if not exists cls_projects (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  mode text not null check (mode in ('creator','studio')),
  status text not null default 'draft' check (status in ('draft','active','blocked','ready','published','archived')),
  brief jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists cls_assets (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references cls_projects(id) on delete cascade,
  kind text not null,
  uri text not null,
  checksum text,
  mime_type text,
  duration_ms bigint,
  rights_status text not null default 'unknown' check (rights_status in ('unknown','verified','restricted','rejected')),
  license_evidence jsonb not null default '{}'::jsonb,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create table if not exists cls_jobs (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references cls_projects(id) on delete cascade,
  type text not null,
  state text not null default 'queued' check (state in ('queued','running','waiting','blocked','succeeded','failed','cancelled')),
  provider text not null default 'local',
  input jsonb not null default '{}'::jsonb,
  output jsonb not null default '{}'::jsonb,
  error jsonb,
  started_at timestamptz,
  finished_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists cls_capabilities (
  id text primary key,
  name text not null,
  category text not null,
  lifecycle_state text not null default 'catalogued',
  provider text not null,
  free_policy text not null default 'allowed',
  provenance jsonb not null default '{}'::jsonb,
  verification_evidence jsonb not null default '{}'::jsonb,
  contract jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists cls_qa_gates (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references cls_projects(id) on delete cascade,
  gate text not null,
  status text not null default 'pending' check (status in ('pending','passed','failed','waived')),
  evidence jsonb not null default '{}'::jsonb,
  checked_at timestamptz,
  unique(project_id, gate)
);

create table if not exists cls_publications (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references cls_projects(id) on delete cascade,
  platform text not null check (platform in ('youtube','facebook','instagram')),
  external_id text,
  state text not null default 'draft' check (state in ('draft','scheduled','publishing','published','failed')),
  metadata jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  created_at timestamptz not null default now()
);

create table if not exists cls_analytics_snapshots (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references cls_projects(id) on delete cascade,
  platform text not null,
  captured_at timestamptz not null default now(),
  metrics jsonb not null default '{}'::jsonb
);

create table if not exists cls_growth_actions (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references cls_projects(id) on delete cascade,
  priority text not null check (priority in ('P0','P1','P2','P3','P4')),
  recommendation text not null,
  evidence jsonb not null default '{}'::jsonb,
  state text not null default 'proposed' check (state in ('proposed','approved','executing','completed','rejected')),
  created_at timestamptz not null default now()
);

create table if not exists cls_audit_events (
  id uuid primary key default gen_random_uuid(),
  project_id uuid references cls_projects(id) on delete cascade,
  actor_type text not null,
  actor_id text,
  action text not null,
  input jsonb not null default '{}'::jsonb,
  output jsonb not null default '{}'::jsonb,
  verification jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists idx_cls_jobs_project_state on cls_jobs(project_id, state);
create index if not exists idx_cls_assets_project on cls_assets(project_id);
create index if not exists idx_cls_audit_project_time on cls_audit_events(project_id, created_at desc);
