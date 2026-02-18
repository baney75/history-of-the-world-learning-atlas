# Decisions Log

## 2026-02-18 - Add project-scoped AGENTS guidance
- Created repository-specific `AGENTS.md` with build/lint/test commands, coding conventions, and completion/push workflow.
- Rationale: future coding agents need deterministic project context and safe execution defaults.

## 2026-02-18 - Introduce local memory system
- Added `agentmem/memory.md`, `agentmem/state.md`, `agentmem/decisions.md`, and `agentmem/pitfalls.md`.
- Rationale: maintain continuity across sessions and enforce update discipline after changes.

## 2026-02-18 - Move period media to real historical photos/artworks
- Downloaded and compressed local JPG assets under `public/images/periods/`.
- Added runtime override map for `imageUrl`, `imageAlt`, and direct `sources` per period in `src/data/historical-periods.ts`.
- Rationale: replace generic illustrations with period-accurate imagery and direct references.
