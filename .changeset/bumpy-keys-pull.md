---
"pastry": minor
---

Migrate from Biome to oxc-based tooling stack

**Breaking Changes:**

- Removed `@biomejs/biome` dependency and `biome.jsonc` configuration
- Replaced with oxc tools: `oxlint`, `oxfmt`, and `oxlint-tsgolint`
- VS Code formatter changed from Biome to oxc extension
- TypeScript peer dependency updated to `^5.9.3`

**Tooling Updates:**

- Upgraded `adamantite` from v0.13 to v0.25 with new oxc-based architecture
- Added `knip` for dependency analysis
- New config files: `.oxfmtrc.jsonc`, `.oxlintrc.json`
- Updated CI workflow: `adamantite.yml` with format, check, typecheck, analyze jobs

**Template Changes:**

- Simplified init script by removing yargs CLI wrapper - use `bun run init` directly
- New `AGENTS.md` for AI coding assistant guidelines
- Removed `.claude/agents/`, `.cursor/rules/`, and `CLAUDE.md`

**Migration for existing template users:**

1. Remove `@biomejs/biome` and `biome.jsonc`
2. Install new dependencies: `bun add -d oxlint oxfmt oxlint-tsgolint adamantite@latest knip`
3. Copy `.oxfmtrc.jsonc` and `.oxlintrc.json` from template
4. Update VS Code settings and extension from Biome to OXC
5. Update CI workflows to use new `adamantite.yml` pattern
