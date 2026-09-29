# Web Portfolio — Working Loop

A repeatable session routine to run each time you sit down to work on the portfolio. Pairs with `plan.md` (the phase checklist) and `progress.md` (the session log).

---

## Before you start (2 min)
- [ ] Open `plan.md`, find the current phase, pick ONE unchecked item to focus on this session
- [ ] If the item is big, break it into 2–3 smaller sub-steps in your head/notes before touching code
- [ ] Pull latest from GitHub if working across devices

## While working
- [ ] Build the smallest version that works first — get it rendering/functioning before polishing
- [ ] Commit in small chunks with clear messages (e.g. `feat: add ASCII cam permission fallback`, not `update stuff`)
- [ ] Push periodically so Vercel preview deploys stay current — use the preview URL to sanity-check on a real device, not just localhost
- [ ] If you hit a design/content decision you didn't plan for, note it — don't rabbit-hole mid-session, decide and move on

## Before you stop (5 min)
- [ ] Check off the completed item(s) in `plan.md`
- [ ] Add one line to `progress.md` under today's date: what you did, what's next
- [ ] If something's broken or half-done, leave a `TODO:` comment in the code AND a note in `progress.md` — don't rely on memory
- [ ] Push final commit for the session

---

## Weekly check-in (do this once a week, not every session)
- [ ] Open the live Vercel URL on your actual phone — does anything look broken?
- [ ] Re-read your Phase 1 art-direction decisions (palette, type, spacing) — is the current build still following them, or has scope drifted?
- [ ] Skim `progress.md` — is momentum steady, or stalled on one phase? If stalled, ask why: blocked on a decision, blocked on a skill gap, or just avoided?
- [ ] Pick the next 3–5 checklist items to target before the next check-in

---

## Definition of "done enough to move on"
Don't chase perfect before moving to the next checklist item — a section is done enough when:
- Content is real (not lorem ipsum / placeholder)
- It doesn't visually break on mobile width
- It matches the Phase 1 palette/type/spacing decisions
- Keyboard/focus states work if it's interactive

Polish passes happen in Phase 5–6, not mid-build on every section.
