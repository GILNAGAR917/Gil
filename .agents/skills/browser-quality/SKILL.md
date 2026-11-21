---
name: browser-quality
description: Use when validating a finished website, checking responsive layouts, browser interactions, accessibility basics, and regression risk with Playwright before calling the work complete.
---

# Browser Quality

1. Run `npm run test:e2e` in a compatible execution environment, or inspect a GitHub Actions run that used the same checks.
2. Inspect screenshots/DOM if a test fails, correct the root cause, rerun the test.
3. Check desktop and mobile widths, touch/click interaction, keyboard focus, and unexpected horizontal overflow.
4. Verify every claimed working action (form submission, contact links, menu) has a real implementation.
5. Record which checks actually ran. Never fabricate screenshots, test results, or deployment status.
