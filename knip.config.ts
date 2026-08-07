import type { KnipConfig } from "knip"
import analyze from "adamantite/analyze"

const config = {
  ...analyze,
  entry: ["scripts/init.ts"],
  ignore: [],
  ignoreFiles: [],
  project: ["src/**/*.ts", "scripts/**/*.ts"],
} satisfies KnipConfig

export default config
