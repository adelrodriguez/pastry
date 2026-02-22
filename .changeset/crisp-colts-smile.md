---
"pastry": patch
---

Update the template's CI, build validation, and release automation to improve package publishing reliability.

- Add trusted publishing configuration for npm releases with OIDC in the release workflow.
- Add a dedicated build workflow so template-based packages are validated with `bun run build` in CI before release.
- Move TypeScript from `peerDependencies` to `devDependencies` for simpler project setup.
- Pin Bun to `1.3.6` across CI workflows to match `bunup` requirements.
