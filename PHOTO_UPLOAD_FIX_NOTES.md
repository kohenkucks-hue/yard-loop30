# Photo Upload / Placement Fix

This update fixes the admin photo placement workflow.

## What changed
- Upload boxes now explain which photo they control.
- After a photo uploads to Vercel Blob, the returned Blob URL is automatically placed into the correct CMS field.
- The uploaded photo URL is also saved to `/api/content` immediately, so you do not lose it if you forget to hit Save to Blob.
- Upload route now rejects unsupported files with a clear error.
- Supported image types: PNG, JPG/JPEG, WEBP, SVG.
- Max recommended upload size: 5 MB.

## Best files
- Logo: transparent PNG or SVG.
- Website photos/backgrounds: JPG or WEBP.
- Gallery images: JPG/WEBP under 5 MB.
