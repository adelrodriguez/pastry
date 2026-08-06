---
"pastry": minor
---

Overhaul the `bun run init` script and rewrite the README

- **Init script**: writes `package.json` fields structurally instead of string replacement — sets `name`, `description`, `author`, `homepage`, `bugs`, and `repository` (handles scoped package names correctly), and updates the copyright line in `LICENSE`.
- **Init script**: removes more template-only material on setup — the docs, pending changesets (keeps `.changeset/README.md`), the `scripts` directory and its `init` entry in `package.json`, and the `@clack/prompts` devDependency. Also rewrites `knip.config.ts` and `tsconfig.json` so the generated package has no leftover `scripts/` references, and empties `CONTEXT.md`.
- **README**: rewritten with step-by-step template usage, development commands, release instructions, and a note on configuring npm trusted publishing.
- **Dependabot**: added `.github/dependabot.yml` with weekly grouped updates for Bun dependencies and GitHub Actions.
