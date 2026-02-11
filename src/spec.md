# Specification

## Summary
**Goal:** Fix the site favicon so it reliably appears in the browser tab after deploy.

**Planned changes:**
- Ensure the PNG favicon file exists at `frontend/public/assets/generated/subrin-favicon-uploaded.dim_32x32.png` and is a valid, non-empty image.
- Verify the deployed static path `/assets/generated/subrin-favicon-uploaded.dim_32x32.png` serves HTTP 200 with `Content-Type: image/png`.
- Update `frontend/index.html` to include a 32x32 PNG `<link rel="icon" ...>` pointing to `/assets/generated/subrin-favicon-uploaded.dim_32x32.png`.
- Add a redundant `<link rel="shortcut icon" ...>` entry (same href) for broader browser compatibility.

**User-visible outcome:** After redeploy and a hard refresh (or opening in a fresh/incognito window), the custom favicon appears in the browser tab instead of the default icon.
