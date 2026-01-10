import { cancel, intro, isCancel, log, outro, spinner, text } from "@clack/prompts"
import Bun from "bun"

intro("🥐 Pastry")

const TEMPLATE_NAME = "pastry"
const TEMPLATE_AUTHOR = "Adel Rodríguez <hey@adel.do>"
const TEMPLATE_GITHUB_USER = "adelrodriguez"
const TEMPLATE_DESCRIPTION = "A simple template to build libraries with Bun"

const name = await text({
  message: "What is the name of the project?",
  placeholder: TEMPLATE_NAME,
  validate: (value) => {
    if (value.length === 0) {
      return "Project name is required"
    }
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
    if (value.length === 0) {
      return "Description is required"
    }
  },
})

if (isCancel(description)) {
  cancel("Operation cancelled")
  process.exit(0)
}

const s = spinner()

const replaceAllText = (value: string, search: string, replacement: string) =>
  value.split(search).join(replacement)

s.start("Updating package.json...")

let packageContents = await Bun.file("package.json").text()
packageContents = replaceAllText(packageContents, TEMPLATE_NAME, name)
packageContents = replaceAllText(packageContents, TEMPLATE_AUTHOR, author)
packageContents = replaceAllText(packageContents, TEMPLATE_GITHUB_USER, githubUser)
packageContents = replaceAllText(packageContents, TEMPLATE_DESCRIPTION, description)

await Bun.write("package.json", packageContents)

s.stop("Package.json updated")

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

s.start("Remove template files...")

await Bun.$`rm -rf ./docs`
s.message("docs removed")
await Bun.$`rm -rf ./CHANGELOG.md`
s.message("CHANGELOG.md removed")

s.stop("Template files removed")

log.success("✨ Project initialized successfully")

outro("Get to cooking! 🥐")
