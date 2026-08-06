# Crayons Loop Moments

Crayons Loop Moments is a private event-video streaming platform for wedding studios, event studios and function-video creators.

## Production domain

- Moments application: `https://moments.crayonsloop.com`
- Main Crayons Loop platform: `https://www.crayonsloop.com`

## Brand architecture

### Crayons Loop

Crayons Loop is positioned as a premium consumer OTT entertainment platform in the Netflix / Amazon Prime Video category.

Core platform scope:

- Films
- Series
- Documentaries
- Kids and family content
- Regional and multilingual catalogues
- Originals and exclusives
- SVOD subscriptions
- TVOD rentals and purchases
- AVOD free-with-ads viewing
- Web, mobile and connected-TV applications
- Personal profiles, watchlists and continue-watching
- Search, recommendations and curated collections

Crayons Loop is not positioned as a creator-upload portal or private-event delivery service. It is the main public entertainment destination for viewers.

### Crayons Loop Moments

Crayons Loop Moments is a separate B2B2C product for studios to deliver private wedding and function videos to their clients and invited families.

## Core purpose

Wedding and event studios can create a branded private streaming page for each function and deliver the finished videos securely to clients, families and invited guests.

Supported event types include:

- Weddings
- Engagements
- Receptions
- Haldi and Mehendi
- Baptism and First Communion
- Birthday functions
- Stage shows
- School and college functions
- Corporate events
- Other private functions

## Primary users

### Studio Owner

- Create and manage studio account
- Add studio branding
- Create client and event projects
- Upload full-length videos, highlights and teasers
- Control access, expiry and downloads
- Track views and delivery status

### Client / Family

- Open a private event page
- Watch videos on mobile, web or TV
- Share approved access with family
- Save favourites and continue watching
- Download only when studio permission is enabled

### Platform Admin

- Verify studios
- Manage storage, streaming and plans
- Handle abuse, copyright and support
- Monitor platform health and billing

## MVP modules

1. Studio signup, login and verification
2. Studio dashboard
3. Client and event project creation
4. Video upload and processing
5. HLS adaptive streaming player
6. Private link, PIN and OTP access
7. Branded event microsite
8. Playlist sections: full film, highlights, teaser and ceremony parts
9. Expiry, download and sharing controls
10. Viewer analytics
11. Storage and streaming usage tracking
12. Subscription and event-package billing
13. Admin control panel
14. Email and WhatsApp-ready invitation links

## Privacy and security rules

- Event videos are private by default
- No public discovery feed
- Access can be protected by PIN, OTP or invited-user login
- Signed and expiring playback URLs
- Studio-controlled download permissions
- Event-level access expiry
- Audit log for uploads, sharing and access changes
- Copyright declaration required from the uploading studio

## Product separation

This repository is reserved only for Crayons Loop Moments.

The Netflix / Amazon Prime Video-style public entertainment platform at `www.crayonsloop.com` must remain in a separate repository, deployment and data boundary.

## Domain routing

`moments.crayonsloop.com` must point only to the deployment generated from this repository. It must never overwrite or redirect to the main Crayons Loop platform.

## Launch gate

Production launch requires:

- Valid SSL certificate for `moments.crayonsloop.com`
- Correct Cloudflare DNS record
- HTTPS-only routing
- Successful application health check
- Tested private-video access control
- Tested upload, processing and playback flow
