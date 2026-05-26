# Yard Loop Photo Area + Mockup Admin Patch

This patch intentionally changes only the photo-placement/admin-image controls requested.

## Fixed
- Uploaded JPG/PNG/WEBP images now render as real images with a transparent background instead of showing as a white placeholder area.
- Hero background images now use proper cover/center/no-repeat display.
- Admin Mockup tab now includes photo controls for actual homepage picture areas:
  - Homepage hero main picture
  - Homepage hero background picture
  - Yard Loop model card pictures
  - Home service card pictures

## Not changed
- No business wording was changed.
- No pricing was changed.
- No Blob token names were changed.
- No GoDaddy/domain settings were changed.
- No extra dependencies were added.

## Build check
- `npm run build` passed locally before this ZIP was created.
