# AGENTS.md - History of the World

## Scope
- This file applies to the repository rooted at `/Users/baney/Documents/Software/History of the World`.
- Follow this file for all coding/content tasks in this repo.

## Project Snapshot
- Stack: React 19 + TypeScript + Vite + Tailwind CSS v4 + shadcn/ui + Motion.
- Package manager: Bun (lockfile: `bun.lock`).
- Data source for timeline content: `src/data/historical-periods.ts`.
- UI entry: `src/App.tsx`, `src/components/*`, `src/index.css`.

## Repository Map
- `src/App.tsx` - timeline page state, filtering, header/footer copy.
- `src/data/historical-periods.ts` - figures, periods, image and source metadata.
- `src/types/history.ts` - shared interfaces (`HistoricalPeriod`, `Source`, etc.).
- `src/components/PeriodDetail.tsx` - detail view (events, sources, nav).
- `src/components/TimelineCard.tsx` - timeline cards and image rendering.
- `public/images/periods/` - local timeline image assets.

## Grounding Before Changes
- Confirm current directory is repo root.
- Read `package.json`, `eslint.config.js`, `tsconfig.app.json`, and files you will modify.
- Prefer smallest safe edit; do not refactor unrelated code.
- Preserve existing theology/content voice unless explicitly asked to rewrite it.

## Build, Lint, and Test Commands
- Install deps: `bun install`
- Dev server: `bun run dev`
- Production build: `bun run build`
- Lint all: `bun run lint`
- Preview build: `bun run preview`

## Testing Reality (Current State)
- There is currently no test runner configured in `package.json`.
- Do not claim tests passed unless you actually add and run a test framework.
- For now, minimum verification is `bun run lint` + `bun run build`.

## Single-Test Guidance (When Tests Are Added)
- If Vitest is added, prefer:
  - All tests: `bunx vitest run`
  - Single file: `bunx vitest run src/path/to/file.test.ts`
  - Single test name: `bunx vitest run -t "test name"`
- If a `test` script is added later, use project script first:
  - `bun run test -- src/path/to/file.test.ts`

## Code Style and Conventions
- TypeScript strict mode is enabled; keep code type-safe.
- Use the `@/` alias for `src` imports when practical.
- Prefer explicit type imports (`import type { ... }`).
- Use single quotes in TS/TSX to match most of the repo.
- Follow file-local formatting style; avoid repo-wide formatting churn.
- Keep component props typed with interfaces near component declarations.
- Keep functions small and intention-revealing; avoid deep nesting.
- Prefer immutable transforms (`map`, `filter`, `reduce`) over mutation.
- Keep IDs, slugs, and object keys stable (`creation`, `cold-war`, etc.).

## Imports
- Order imports by category:
  1) React/framework
  2) Third-party libraries
  3) Internal `@/...` modules
  4) Relative imports
  5) Type imports (or inline `type` where already used)
- Remove unused imports immediately (TypeScript config flags this).

## Naming
- Components: `PascalCase` (`TimelineCard`).
- Functions/variables: `camelCase`.
- Constants: `UPPER_SNAKE_CASE` for true constants; otherwise descriptive `camelCase`.
- Data IDs/slugs: lowercase kebab-case.

## Error Handling
- Fail safely on network calls; return `null`/fallback with explicit handling.
- Do not swallow errors silently in services.
- Include enough context in logs for debugging, but do not log secrets.

## Content and Data Rules
- Timeline period data lives in `src/data/historical-periods.ts`.
- Each period should have:
  - accurate `imageUrl`
  - specific `imageAlt`
  - at least one direct source URL (prefer two)
- Prefer primary/direct references (Scripture passages, archives, reputable encyclopedic sources).
- Keep source titles human-readable; keep URLs stable and publicly accessible.

## Image Rules
- Store timeline images locally in `public/images/periods/`.
- Prefer real historical imagery over generic illustrations.
- Use compressed assets (web-friendly size) to protect performance.
- Ensure each image matches its period and can still read clearly at card size.

## Cursor/Copilot Rules Compatibility
- Checked paths:
  - `.cursor/rules/`
  - `.cursorrules`
  - `.github/copilot-instructions.md`
- Current state: none found in this repository.
- If these files are added later, treat them as additional repo-level constraints.

## Skill Routing for This Repo
- Source ingestion and markdown lifecycle: `source-markdown-lifecycle`
  - Capture web/docs to markdown, then choose keep vs delete after synthesis.
- Writing quality and anti-slop editing: `anti-slop`
  - Use `references/style-guides.md` (includes *The Elements of Style*) for polish.
- Grokipedia workflow (API-down resilient): `grokipedia-research`
  - Prefer site search + snapshot/capture workflow instead of legacy API assumptions.
- Academic truth-seeking workflow: `academic-truth-research`
  - Apply CRAAP/SIFT, evidence hierarchy, contradiction checks, and proper citation.
- Current events workflow: `unbiased-news-research`
  - Use RSS + cross-source verification and image relevance checks.
- Historical image sourcing: `web-image-curator`
  - Use topic-specific, non-generic visuals with provenance.

## Memory and Update System (Project-Scoped)
- Memory directory (absolute path): `/Users/baney/Documents/Software/History of the World/agentmem`
- Memory index (absolute path): `/Users/baney/Documents/Software/History of the World/agentmem/memory.md`
- Keep these files current:
  - `agentmem/memory.md` (index + latest status)
  - `agentmem/decisions.md` (dated decisions and rationale)
  - `agentmem/pitfalls.md` (mistakes and prevention rules)
  - `agentmem/state.md` (active focus, blockers, next actions)

## Completion Loop (Mandatory)
- Build a task ledger from user requests.
- Execute smallest next step.
- Verify result with evidence.
- Update ledger/memory.
- Repeat until every requested change is complete.
- Do not stop at "partial done" unless blocked by a hard external dependency.

## Push Workflow (When User Wants Publish)
- Standard loop before push:
  1) `bun run lint`
  2) `bun run build`
  3) verify changed UX/data manually
  4) review `git diff`
- Commit with a concise message explaining why the change exists.
- Push only when the user requests publishing:
  - `git push -u origin <branch>` (first push)
  - `git push` (subsequent pushes)

## Git Hygiene
- Never discard unrelated local changes you did not create.
- Prefer focused commits by feature/fix area.
- Before commit, inspect staged files with `git diff --staged`.
- Keep commit messages in imperative mood (`update`, `fix`, `add`).
- Avoid force-push unless user explicitly asks and understands risk.

## Quick Troubleshooting
- If build fails, run `bun run lint` first and fix lint/type issues before deeper debugging.
- If images do not render, verify `imageUrl` and local file path under `public/images/periods/`.
- If timeline data looks wrong, inspect override maps in `src/data/historical-periods.ts`.
- If links break, re-run source verification and update `agentmem/sources-checked.md`.

## Agent Reporting Expectations
- Report what changed, where, and why in concise bullets.
- Separate observed verification results from assumptions.
- Include any residual risks (for example, no automated test suite).

## Definition of Done
- Requested changes are implemented.
- Lint/build pass (and tests if configured).
- New/changed sources are valid and directly relevant.
- New/changed images render and are period-accurate.
- `agentmem` files updated with decisions + current state.
- Final report includes what changed, verification run, and any remaining risk.
