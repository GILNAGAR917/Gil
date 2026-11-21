# Optional third-party design skills

These are the original upstream repositories seen in the discussion:
- Apple Design by Emil Kowalski: https://github.com/emilkowalski/skills/tree/main/skills/apple-design
- Taste Skill by Leonxlnx: https://github.com/Leonxlnx/taste-skill

The repository contains self-authored lightweight substitutes in `.agents/skills`. The original third-party skill packages have NOT been downloaded or installed into this repository.

For a future Codex cloud run, first review the upstream repository contents, licenses, security, and latest install guidance. If the user specifically requests the ORIGINAL packages and the cloud environment supports it, install them into that target repository (not into the user's PC). Upstream examples:
```sh
npx skills add emilkowalski/skills --skill apple-design -a codex
npx skills add Leonxlnx/taste-skill --skill design-taste-frontend -a codex
```
Do not claim the commands have been executed until they actually have. The user may need to authorize cloud execution. Both skills are optional; the in-repo skills work without them.

Figma and Linear are ChatGPT integrations, not libraries that the published website must load to function.
