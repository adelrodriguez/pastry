import { cancel, intro, isCancel, log, outro, spinner, text } from "@clack/prompts"
import Bun from "bun"

intro("🥐 Pastry")

const TEMPLATE_NAME = "pastry"
const TEMPLATE_AUTHOR = "Adel Rodríguez"
const TEMPLATE_GITHUB_USER = "adelrodriguez"
const TEMPLATE_DESCRIPTION = "A simple template to build libraries with Bun"

const name = await text({
  message: "What is the name of the project?",
  placeholder: TEMPLATE_NAME,
  validate: (value) => {
    if (value) {
      return
    }

    return "Project name is required"
  },
})

if (isCancel(name)) {
  cancel("Operation cancelled")
  process.exit(0)
}

const author = await text({
  defaultValue: TEMPLATE_AUTHOR,
  message: "What is the author of the project?",
  placeholder: TEMPLATE_AUTHOR,
})

if (isCancel(author)) {
  cancel("Operation cancelled")
  process.exit(0)
}

const githubUser = await text({
  defaultValue: TEMPLATE_GITHUB_USER,
  message: "What is the GitHub user of the project?",
  placeholder: TEMPLATE_GITHUB_USER,
})

if (isCancel(githubUser)) {
  cancel("Operation cancelled")
  process.exit(0)
}

const description = await text({
  message: "What is the description of the project?",
  placeholder: TEMPLATE_DESCRIPTION,
  validate: (value) => {
    if (value) {
      return
    }

    return "Description is required"
  },
})

if (isCancel(description)) {
  cancel("Operation cancelled")
  process.exit(0)
}

const s = spinner()

s.start("Updating package.json...")

const packageJson = await Bun.file("package.json").json()
const repositoryName = name.split("/").at(-1) ?? name
const repoUrl = `https://github.com/${githubUser}/${repositoryName}`

packageJson.name = name
packageJson.version = "0.0.0"
packageJson.description = description
packageJson.author = author
packageJson.homepage = `${repoUrl}#readme`
packageJson.bugs = {
  url: `${repoUrl}/issues`,
}
packageJson.repository = {
  type: "git",
  url: `${repoUrl}.git`,
}
delete packageJson.scripts.init
delete packageJson.devDependencies["@clack/prompts"]

await Bun.write("package.json", `${JSON.stringify(packageJson, null, 2)}\n`)

s.stop("Package.json updated")

s.start("Updating LICENSE...")

const license = await Bun.file("LICENSE").text()
const licenseAuthor = author.replace(/\s*<[^>]+>\s*$/, "")
const updatedLicense = license.replace(
  /^Copyright \(c\) \d{4} .+$/m,
  `Copyright (c) ${new Date().getFullYear()} ${licenseAuthor}`
)

await Bun.write("LICENSE", updatedLicense)

s.stop("LICENSE updated")

s.start("Updating README.md...")

const readme = `
<div align="center">
  <h1 align="center">${name}</h1>

  <p align="center">
    <strong>${description}</strong>
  </p>
</div>

Made with [🥐 \`pastry\`](https://github.com/adelrodriguez/pastry)
`

await Bun.write("README.md", readme)

s.stop("README.md updated")

s.start("Updating configuration files...")

const tsconfig = (await Bun.file("tsconfig.json").json()) as { include: string[] }
tsconfig.include = tsconfig.include.filter((path: string) => path !== "scripts")

await Bun.write(
  "knip.config.ts",
  `import type { KnipConfig } from "knip"
import analyze from "adamantite/analyze"

export default {
  ...analyze,
  project: ["src/**/*.ts"],
} satisfies KnipConfig
`
)
await Bun.write("tsconfig.json", `${JSON.stringify(tsconfig, null, 2)}\n`)

s.stop("Configuration files updated")

s.start("Removing template files...")

await Bun.$`rm -rf ./docs`
s.message("docs removed")
await Bun.$`rm -rf ./CHANGELOG.md`
s.message("CHANGELOG.md removed")
await Bun.$`find ./.changeset -maxdepth 1 -type f -name "*.md" ! -name "README.md" -delete`
s.message("template changesets removed")
await Bun.write("CONTEXT.md", "")
s.message("CONTEXT.md emptied")
await Bun.$`rm -rf ./scripts`
s.message("init script removed")

s.stop("Template files removed")

log.success("✨ Project initialized successfully")

outro("Get to cooking! 🥐")
