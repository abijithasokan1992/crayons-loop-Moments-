-- Crayons Loop Studio production control plane
create type loop_project_status as enum ('DRAFT','IN_PRODUCTION','QA','READY_TO_PUBLISH','PUBLISHING','PUBLISHED','VERIFIED','COMPLETE','ACTION_REQUIRED');
create type loop_stage_status as enum ('PENDING','RUNNING','SUCCEEDED','FAILED','SKIPPED');

create table if not exists loop_projects (
  id uuid primary key,
  organization_id uuid references organizations(id),
  name text not null,
  format text not null,
  duration_seconds integer,
  director text,
  producer text,
  banner text,
  destination text,
  status loop_project_status not null default 'DRAFT',
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists loop_pipeline_runs (
  id uuid primary key,
  project_id uuid not null references loop_projects(id),
  status loop_stage_status not null default 'PENDING',
  current_stage text,
  attempt integer not null default 0,
  blocker_code text,
  fallback_selected text,
  evidence jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists loop_stage_runs (
  id uuid primary key,
  pipeline_run_id uuid not null references loop_pipeline_runs(id),
  stage text not null,
  status loop_stage_status not null default 'PENDING',
  provider text,
  attempt integer not null default 0,
  output_ref text,
  error_code text,
  evidence jsonb not null default '{}'::jsonb,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists loop_publications (
  id uuid primary key,
  project_id uuid not null references loop_projects(id),
  platform text not null,
  external_id text,
  status text not null default 'PENDING',
  metadata jsonb not null default '{}'::jsonb,
  verification jsonb not null default '{}'::jsonb,
  published_at timestamptz,
  verified_at timestamptz,
  created_at timestamptz default now()
);

create index if not exists idx_loop_pipeline_project on loop_pipeline_runs(project_id);
create index if not exists idx_loop_stage_pipeline on loop_stage_runs(pipeline_run_id);
create index if not exists idx_loop_publications_project on loop_publications(project_id);
