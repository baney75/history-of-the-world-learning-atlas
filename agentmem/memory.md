# Project Memory Index

Last updated: 2026-02-18

## Current Snapshot
- Project: History of the World timeline app.
- Stack: React + TypeScript + Vite + Tailwind v4 + shadcn/ui.
- Verification baseline: `bun run lint` and `bun run build`.

## Memory Files
- `agentmem/state.md` - current focus, blockers, and next actions.
- `agentmem/decisions.md` - dated engineering/content decisions.
- `agentmem/pitfalls.md` - mistakes and prevention rules.
- `agentmem/sources-checked.md` - periodic URL validation log for timeline sources.

## Update Protocol
1. Before non-trivial changes, read `state.md` and relevant entries in `decisions.md`/`pitfalls.md`.
2. After meaningful changes, add dated notes to `decisions.md`.
3. If a mistake/error occurred, log it in `pitfalls.md` with a prevention rule.
4. Update `state.md` with new focus and next actions.
