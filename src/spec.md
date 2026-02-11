# Specification

## Summary
**Goal:** Fix the missing favicon so the browser tab shows the app’s custom icon instead of the default.

**Planned changes:**
- Add the generated favicon file to `frontend/public/assets/generated/subrin-favicon-uploaded.dim_32x32.png` so it is served as a static asset.
- Verify and, only if needed, update `frontend/index.html` to reference `/assets/generated/subrin-favicon-uploaded.dim_32x32.png` with `type="image/png"` and `sizes="32x32"`, ensuring no other favicon link overrides it.

**User-visible outcome:** After a hard refresh, the browser tab displays the custom favicon and the favicon URL returns HTTP 200.
