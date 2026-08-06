-- Initial shared platform schema
create type product_scope as enum ('OTT','MOMENTS');
create table organizations (id uuid primary key, name text not null, scope product_scope not null, created_at timestamptz default now());
create table users (id uuid primary key, email text unique not null, created_at timestamptz default now());
create table memberships (organization_id uuid references organizations(id), user_id uuid references users(id), role text not null, primary key (organization_id,user_id));
create table titles (id uuid primary key, organization_id uuid references organizations(id), scope product_scope not null, title text not null, status text not null default 'draft', created_at timestamptz default now());
create table events (id uuid primary key, organization_id uuid references organizations(id), title text not null, event_date date, access_mode text not null default 'pin', expires_at timestamptz, created_at timestamptz default now());
create table media_assets (id uuid primary key, owner_type text not null, owner_id uuid not null, kind text not null, source_key text not null, playback_id text, status text not null default 'uploaded', created_at timestamptz default now());
create table entitlements (id uuid primary key, user_id uuid references users(id), scope product_scope not null, resource_id uuid not null, starts_at timestamptz default now(), ends_at timestamptz);
create table audit_logs (id bigserial primary key, actor_user_id uuid, action text not null, resource_type text not null, resource_id text not null, payload jsonb default '{}'::jsonb, created_at timestamptz default now());
