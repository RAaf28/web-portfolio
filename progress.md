# Web Portfolio — Progress Log

Running log of work sessions. Add a new entry each time you finish a session (see `loop.md`). Keep entries short — a few lines each.

---

## Status snapshot

_(update this block whenever phase status changes — keep it at the top so it's the first thing you see)_

| Phase                                    | Status      |
| ---------------------------------------- | ----------- |
| 0 — Foundation & Content Prep            | Done        |
| 1 — Art Direction & System               | Done        |
| 2 — Project Scaffold                     | In progress |
| 3 — Core Sections                        | In progress |
| 4 — Signature Feature: Live ASCII Camera | In progress |
| 5 — Edge States & Polish                 | Not started |
| 6 — Accessibility & Performance Pass     | Not started |
| 7 — Launch                               | Not started |

Status options: `Not started` / `In progress` / `Blocked` / `Done`

---

## Session log

### 2026-09-29

**Did:**

- Initialized the Next.js portfolio app in a lowercase project folder.
- Built the first pass of the Windows-inspired portfolio landing page using the project direction from the architecture and planning docs.
- Added portfolio content matching the CV and the mixed-audience positioning.

**Next:**

- Copy the CV into the public assets folder for the download link.
- Verify the app builds successfully and refine any layout issues.

**Blockers/notes:**

- The root workspace folder name contained uppercase letters, which blocked `create-next-app` without a lowercase project folder.
- The portfolio is intentionally being implemented as a first functional pass, with the live ASCII camera left as a planned enhancement rather than a fully built feature yet.

---

<!-- Copy the block above for each new session. Newest entries go on top. -->

### 2026-09-29

**Did:**

- Implemented the Win98 Component Playbook direction with `98.css` primitives and classic gray/navy desktop chrome.
- Added file-style tabs, beveled controls, checkmark lists, and a project status bar.
- Reworked dark teal panel surfaces to preserve readable black body copy on Win98 gray windows.

**Next:**

- Compare the running page against the intended mockup and continue atom-level spacing refinements.

**Blockers/notes:**

- The 98.css package emits one non-blocking CSS parser warning for its upstream `@media (not(hover))` rule during Next.js optimization.

### 2026-09-29

**Did:**

- Replaced the macOS traffic lights with Win98-style square minimize, maximize, and close controls.
- Added JetBrains Mono for terminal-facing labels, headings, and status UI.
- Added amber as the interaction/status/ASCII accent and fixed the taskbar to the viewport.

**Next:**

- Continue with accessibility and performance polish.

**Blockers/notes:**

- The window controls are visual portfolio chrome; they do not alter the page window state.

### 2026-09-29

**Did:**

- Added curated screenshots from the Clynic, GeoConnect, and MoneyWise asset folders to `public/projects`.
- Added responsive hero and thumbnail galleries to each featured project card.

**Next:**

- Run the accessibility and performance polish pass.

**Blockers/notes:**

- Original asset folders remain untouched; the app uses stable copies with web-friendly filenames.

### 2026-09-29

**Did:**

- Fixed the window toolbar so it stays attached to its portfolio window while the taskbar remains fixed.
- Added the live ASCII camera prototype with explicit permission, start/stop controls, and a graceful fallback state.

**Next:**

- Add real project visuals and run the accessibility/performance polish pass.

**Blockers/notes:**

- Camera behavior requires browser permission and works best in a secure context such as localhost or HTTPS.
