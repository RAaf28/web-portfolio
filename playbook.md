# Web Portfolio — Win98 Component Playbook

Reference for closing the gap between the mockup and the build. Pairs with `architecture.md` (folder structure) — the primitives below map to `/components/os`.

**Core decision:** use `98.css` (jdan) for authentic OS chrome — bevels, title bars, tabs, buttons, status bars — layered with Tailwind for spacing/layout. Stop hand-approximating these widgets; they're a solved problem.

**Build order: bottom-up.** Verify each atom against the mockup individually before composing into sections. Do not generate whole sections and iterate after — that's how drift happens.

---

## Atoms (build + verify these first, in order)

- [ ] **Window frame** — `98.css` `.window` — outer bevel, correct border weight
- [ ] **Title bar** — `.title-bar` with icon slot + label + `.title-bar-controls` (square minimize/maximize/close, NOT macOS traffic lights)
- [ ] **Tab strip** — `.tabs` / `.tabs-inner` — e.g. `[General Profile] [Projects.dir] [Contact.msg]` styling, active-tab state
- [ ] **Button** — default `98.css` `<button>` bevel (raised/pressed states on `:active`)
- [ ] **Tag/skill pill badge** — custom, built on 98.css button or fieldset styling — colored border variants (as seen in mockup: teal, purple, green, blue pills)
- [ ] **Checklist item** — ✓ checkmark bullet style, not generic `•`
- [ ] **Status bar** — bottom-of-window strip, e.g. `LINES: 46, CHARS: 1,842` — use `.status-bar` / `.status-bar-field`
- [ ] **Address bar** — (for Explorer-style windows) — icon + URL-style text field, back/forward/reload buttons
- [ ] **Scrollbar** — 98.css default skin, confirm it renders (may need `-webkit-scrollbar` fallback for non-Windows browsers)

Verify each atom in isolation (a component storybook page or a scratch route works) — pixel-compare against the mockup screenshot before moving on.

## Molecules (compose once atoms are verified)

- [ ] **Explorer-style window** — Title bar + address bar + tab strip + content area (used for: Bio/Developer Spec panel)
- [ ] **Notepad-style window** — Title bar (File/Edit/Search/Help menu row) + content area + status bar (used for: Philosophy/notes panel)
- [ ] **Taskbar** — Start button + section nav tabs (BIO/PROJECTS/SKILLS/EXPERIENCE/CONTACT) + clock — **make this `position: sticky`**, not scroll-dependent
- [ ] **Project card** — window frame + screenshot area + tag pills row + bullet list + GitHub/Demo buttons
- [ ] **ASCII cam panel** — window frame + canvas/pre render area + STATUS indicator + START/STOP buttons

## Sections (compose molecules — build in this order)

- [ ] Bio / Developer Specification section (Explorer window + Notepad window side by side, per mockup)
- [ ] Projects section (project card molecule × N)
- [ ] Skills section (grouped pill lists)
- [ ] Experience section (timeline entries in window frames)
- [ ] Contact section
- [ ] Taskbar (build alongside, since it's global chrome, not a page section)

---

## Type & color spec (apply consistently across all atoms above)

- **Monospace font** (IBM Plex Mono or JetBrains Mono): all labels, eyebrows, stats, status bar text, taskbar clock, ASCII cam panel
- **Body copy**: keep current sans-serif for paragraph readability
- **Accent color**: ONE saturated color (not current all-teal), reserved for: interactive elements (buttons/links), status indicators (STATUS: LIVE), ASCII cam highlight — everything else stays neutral so the accent actually pops

---

## Definition of "atom done"
An atom is done when it visually matches the mockup reference (bevel direction, border weight, spacing, color) — not just "functionally similar." Screenshot side-by-side comparison before checking off.
