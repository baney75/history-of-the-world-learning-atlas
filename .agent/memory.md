# Project Memory

## Patterns

- Use standard Tailwind spacing (e.g. `ml-5`) or precise brackets (`ml-[22px]`) instead of non-existent decimals like `ml-5.5` when upgrading to or utilizing Tailwind v4.
- `bun run lint` and `bun run build` are the standard verification steps.
- Dark mode is implemented via `isDark` state and CSS variables inside `index.css`.

## Gotchas

## 2026-02-21 — Tailwind CSS v4 custom spacing

**Symptom:** Elements inside the PeriodDetail buttons overlapped and did not left/right align as intended.
**Root cause:** React elements used `ml-5.5` and `mr-5.5` which do not resolve to valid CSS utility classes by default in Tailwind v4.
**Fix:** Restructured the DOM elements to natively rely on standard flexbox attributes (`justify-start`, `gap-2`, `items-center`) rather than precise margins for icon vs. text alignment.
**Prevention:** Avoid decimal spacing classes unless configured in `@theme`.
