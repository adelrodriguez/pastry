import core from "adamantite/lint"
import { defineConfig } from "oxlint"

export default defineConfig({
  extends: [core],
  options: {
    respectEslintDisableDirectives: true,
    typeAware: true,
    typeCheck: true,
  },
})
