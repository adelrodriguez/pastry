---
"pastry": minor
---

Migrate oxlint config to TypeScript (`oxlint.config.ts`) and update tooling defaults

- **Breaking config change**: `.oxlintrc.json` replaced with `oxlint.config.ts`. If you've customized the JSON config, migrate your rules to the new TypeScript format.
- **Oxfmt**: `experimentalSortImports` renamed to `sortImports`, `experimentalTailwindcss` renamed to `sortTailwindcss` (following upstream stabilization in oxfmt 0.35).
- **CI**: Node.js 24 now set up explicitly; pinned Bun version removed.
- **Editor**: Added `.zed/settings.json` with oxfmt and oxlint LSP integration.
- **Dependencies**: adamantite 0.30 (effect v4 beta), oxfmt 0.35, oxlint 1.50, TypeScript pinned to 5.9.3.
