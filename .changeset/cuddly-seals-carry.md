---
"pastry": patch
---

Fix init script to set initial package version to 0.0.0

Move npm authentication from `.npmrc` to the GitHub release workflow so the token is configured dynamically during CI instead of being expected in the local environment
