import type { KnipConfig } from "knip"
import analyze from "adamantite/analyze"

const config: KnipConfig = {
  ...analyze,
  ignore: ["**/*.d.ts"],
  ignoreExportsUsedInFile: true,
  ignoreFiles: [
    "**/dist/**",
    "**/build/**",
    "**/coverage/**",
    "**/.next/**",
    "**/.vercel/**",
    "**/.turbo/**",
  ],
  project: ["src/**/*.ts"],
  rules: {
    ...analyze.rules,
    binaries: "error",
    classMembers: "off",
    dependencies: "error",
    devDependencies: "off",
    duplicates: "warn",
    enumMembers: "off",
    exports: "warn",
    files: "error",
    nsExports: "warn",
    nsTypes: "warn",
    optionalPeerDependencies: "warn",
    types: "warn",
    unlisted: "error",
    unresolved: "error",
  },
}

export default config
