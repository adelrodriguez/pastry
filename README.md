<div align="center">
  <h1 align="center">🥐 <code>pastry</code></h1>

  <p align="center">
    <strong>A simple template to build libraries with Bun</strong>
  </p>
</div>

Pastry is a simple template for open-source packages that use Bun.

## Use the template

1. Select **Use this template** on GitHub.
2. Clone your new repository.
3. Install the dependencies:

   ```sh
   bun install
   ```

4. Set the package information:

   ```sh
   bun run init
   ```

The init command updates `package.json`, `README.md`, `LICENSE`, `knip.config.ts`, and
`tsconfig.json`. It removes template documentation, pending changesets, the init command, and
`@clack/prompts`. It empties `CONTEXT.md`. Run it only one time.

## Develop the package

Write the package source in `src`. Write tests next to the source or in `src/__tests__`.

Use these commands:

```sh
bun run dev       # Build when a source file changes.
bun run build     # Build the package in dist.
bun run test      # Run the tests.
bun run check     # Check lint rules and TypeScript types.
bun run format    # Format the files.
bun run analyze   # Find unused files and dependencies.
```

## Included tools

- [Bun](https://bun.sh) runs scripts and tests.
- [Bunup](https://github.com/bunup/bunup) builds the package.
- [Adamantite](https://github.com/adelrodriguez/adamantite) checks and formats the code.
- [Changesets](https://github.com/changesets/changesets) manages versions and changelogs.
- GitHub Actions checks, tests, builds, and publishes the package.
- Dependabot updates Bun dependencies and GitHub Actions.

## Release a change

Create a changeset for a change that affects package users:

```sh
bun changeset
```

Commit the changeset with the code. The release workflow creates a release pull request.
After you merge that pull request, the workflow publishes the package to npm.

Configure npm trusted publishing before the first release. In npm, connect the package to
this GitHub repository and to `.github/workflows/release.yml`.

## Migrate a project

See [Migrate a project](https://github.com/adelrodriguez/pastry/blob/main/docs/migrate-project.md).

## License

Pastry uses the [MIT License](LICENSE).
