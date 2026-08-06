# Crayons Loop Moments

Crayons Loop Moments is the short-form and moments experience within the Crayons Loop streaming ecosystem.

## Production domains

- Main streaming platform: `https://crayonsloop.com`
- Canonical main host: `https://www.crayonsloop.com`
- Moments application: `https://moments.crayonsloop.com`

## Product separation

### Crayons Loop

Public VOD streaming platform supporting:

- AVOD
- SVOD
- TVOD
- Web
- Mobile
- OTT / Connected TV

### Crayons Loop Moments

A separately deployed application for short-form clips, highlights, promotional moments, discovery feeds and shareable video experiences.

## Repository responsibility

This repository is reserved for the Moments application only. The main Crayons Loop streaming platform must remain in a separate repository and deployment project.

## Domain routing target

`moments.crayonsloop.com` must point only to the deployment generated from this repository. It must not redirect to or overwrite the main `crayonsloop.com` application.

## Launch gate

Production launch requires valid SSL, DNS resolution, HTTPS redirects and a successful application health check.
