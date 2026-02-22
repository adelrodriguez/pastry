# pastry

## 0.2.2

### Patch Changes

- a792432: Update the template's CI, build validation, and release automation to improve package publishing reliability.
  - Add trusted publishing configuration for npm releases with OIDC in the release workflow.
  - Add a dedicated build workflow so template-based packages are validated with `bun run build` in CI before release.
  - Move TypeScript from `peerDependencies` to `devDependencies` for simpler project setup.
  - Pin Bun to `1.3.6` across CI workflows to match `bunup` requirements.

## 0.2.1

### Patch Changes

- 44a1679: Fix init script to set initial package version to 0.0.0

  Move npm authentication from `.npmrc` to the GitHub release workflow so the token is configured dynamically during CI instead of being expected in the local environment

## 0.2.0

### Minor Changes

- 35f902d: Migrate from Biome to oxc-based tooling stack

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

### Patch Changes

- 2360f33: Improve template initialization and documentation structure
  - Restructure CLAUDE.md with clear sections for Agents and Bun usage instructions
  - Enhance template script to remove CHANGELOG.md along with docs directory during initialization
  - Improve user feedback messages during template cleanup process

## 0.1.0

### Minor Changes

- acc6af9: Add interactive template initialization CLI and comprehensive documentation

  This release introduces two major features that significantly improve the developer experience when working with the Pastry template:

  **Interactive Template CLI** (d3b12c5)
  - Added `bun run template init` command that provides an interactive CLI for scaffolding new projects
  - Prompts users for project name, author, GitHub username, and description
  - Automatically updates package.json, README.md, and removes template documentation
  - Uses @clack/prompts for a polished terminal UI with spinners and progress indicators
  - Includes proper error handling and validation for user inputs

  **Comprehensive Documentation** (870d134)
  - Added detailed migration guide (`docs/migrate-project.md`) with 594 lines of documentation covering:
    - Three different git merge strategies for preserving project history
    - Step-by-step post-migration instructions for package.json, source code organization, configuration reconciliation, and dependency updates
    - Troubleshooting section for common migration issues
    - Examples and best practices for converting existing projects to the Pastry template
  - Enhanced README.md with a clear overview of included tools (Bun, Bunup, Adamantite, Changesets, GitHub Actions)
  - Improved template script with better user feedback and file cleanup

  **Claude Code Agent for Changesets**
  - Added a specialized `changeset-writer` agent (`.claude/agents/changeset-writer.md`) for automating changelog generation
  - Analyzes git diffs and generates appropriate changeset entries following semantic versioning principles
  - Provides intelligent version bump recommendations (major/minor/patch) based on change impact
  - Writes user-focused changelog descriptions with proper formatting and examples
  - Integrates seamlessly with the existing changesets workflow

  These additions make it significantly easier for developers to both start new projects from scratch and migrate existing projects to the Pastry template while maintaining their git history.
