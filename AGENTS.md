# Gil AI Web Studio — Agent Instructions

Scope: this repository, including future website code created inside it. Do not change other repositories or the user's computer without a request.

When the user says "build a website", "improve design", "fix website", or equivalent Hebrew:
1. Inspect the repository and the user's requested website requirements. Preserve working functionality. Avoid placeholder claims, fictitious business details, and unsolicited downloads.
2. Create a concise design direction. Apply the repository's `tasteful-web` skill for layout, typography, spacing and art direction. Apply `apple-polish` for details, interactions, and restrained animations. These are ORIGINAL lightweight in-repo skills; do not misrepresent them as the upstream third-party Apple Design or Taste Skill.
3. If the task includes an existing Figma design or creating an editable design, use the connected Figma tool when accessible and authorized. If no Figma design is needed, build directly in code; Figma is not a required runtime dependency.
4. Use Linear to document/track tasks only when the user wants project tracking. Do not invent deadlines, team assignments, or completed work. GitHub is the source of truth for code.
5. Prefer mobile-first responsive pages; use semantic HTML, accessibility checks, RTL and Hebrew where appropriate, keyboard access, reduced-motion support, real content, and good performance.
6. Verify the website: run Playwright with `npm run test:e2e` when an execution environment is available; read the CI result when available. Check desktop/mobile navigation, no horizontal overflow, and browser errors.
7. Distinguish implemented, tested and deployed. Never claim something is online or tested until verified. Do not commit credentials.
8. For every new website in another repository, copy this AGENTS.md, relevant `.agents/skills` folders, Playwright config/test and workflow or explicitly request that project as the working repository. These settings are NOT global to all ChatGPT conversations.

Source guidance for optional upstream skills is in `docs/UPSTREAM-SKILLS.md`. Do not silently execute remote installers or assume third-party skills have been installed.
