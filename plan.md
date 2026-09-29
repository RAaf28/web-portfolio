# Web Portfolio — Build Plan

**Concept:** Retro Windows 98 desktop as structure, terminal/ASCII as content layer, capped off with a live camera-to-ASCII signature feature.
**Stack:** Next.js + React, deployed on Vercel, custom domain.
**End goal:** Live, hosted, mobile-usable portfolio a recruiter can scan in under a minute.

---

## Phase 0 — Foundation & Content Prep
*Nothing gets built well without this first.*

- [ ] Decide primary audience for this version (recruiters/internships vs. broader — pick one to lead with)
- [ ] Write real bio copy in your own voice (not placeholder/jargon-heavy filler)
- [ ] Pick your 3–5 flagship projects to feature: Clynic, GeoConnect, EcoDex, MovieDex, SIEM (Wazuh/ELK)
- [ ] For each project, write: problem, your role, stack, 1–2 key decisions/tradeoffs, links (GitHub/demo)
- [ ] Collect/crop real screenshots or record short GIFs for each project
- [ ] Draft "Experience" content: AIESEC oGX (IR staff → VP), freelance SNBT/TOEFL tutoring
- [ ] Export current resume as PDF for download link
- [ ] Decide domain name, check availability (Namecheap/Porkbun/Cloudflare)

## Phase 1 — Art Direction & System
*Lock this before writing code — retrofitting a design system later is expensive.*

- [ ] Pinterest research pass: save 15–20 refs across win98 UI, neofetch/terminal, ASCII art searches
- [ ] Pick final palette (Win98 teal/navy base + one saturated accent color)
- [ ] Pick type pairing: pixel/system font for OS chrome + monospace for terminal/code content
- [ ] Define spacing scale (e.g. 4/8/16/24/32/64px) — write it down, don't eyeball later
- [ ] Sketch/wireframe the "desktop" layout: which sections = which windows (Bio, Projects, Skills, Contact)
- [ ] Design the taskbar/nav bar that lets users jump to sections directly (bypass the window metaphor)
- [ ] Decide default landing state — how many windows open on load (recommend: just Bio, others closed/minimized)
- [ ] Sketch the **mobile layout** as its own design, not a responsive shrink of the desktop version

## Phase 2 — Project Scaffold
- [ ] Init Next.js project, connect to GitHub repo
- [ ] Set up Tailwind (or CSS approach of choice) with the Phase 1 tokens (colors, spacing, fonts)
- [ ] Build base layout shell: desktop background, taskbar, window component (title bar, border, buttons)
- [ ] Build reusable "Window" component (draggable optional — decide if worth the complexity)
- [ ] Connect Vercel to the repo for auto-deploy on push (get a live preview URL early)

## Phase 3 — Core Sections
- [ ] Bio/About window (real content from Phase 0)
- [ ] Projects window/list — using real screenshots + write-ups
- [ ] Skills section — grouped by category (Frontend/Backend/Mobile/Tools), not a flat tag list
- [ ] Experience section — AIESEC oGX + tutoring
- [ ] Contact section — email, LinkedIn, GitHub, resume PDF download
- [ ] Favicon set + Open Graph/social share preview image

## Phase 4 — Signature Feature: Live ASCII Camera
- [ ] Prototype `getUserMedia()` camera access + video element
- [ ] Canvas downsampling + pixel-to-ASCII brightness mapping
- [ ] Render loop via `requestAnimationFrame`, throttled fps
- [ ] Color variant (map RGB per character) vs. monochrome toggle
- [ ] Style as a themed window (e.g. `ASCII_CAM.exe`) matching the desktop aesthetic
- [ ] Build permission-denied / no-camera fallback (static ASCII portrait or pre-recorded demo)
- [ ] Performance test and throttle further on mobile

## Phase 5 — Edge States & Polish
*The details that separate finished from vibecoded.*

- [ ] Custom 404 page (BSOD-parody or themed error dialog)
- [ ] Loading state (themed boot/progress bar)
- [ ] Form success/error states (no raw browser alerts)
- [ ] Empty-state handling if any filterable content exists
- [ ] Visible keyboard focus states on all interactive elements
- [ ] Hover/active/pressed states on all buttons (bevel effect fits the theme)
- [ ] Custom cursor states (optional but cheap and on-theme)
- [ ] Right-click context menu (optional, high delight-to-effort ratio)

## Phase 6 — Accessibility & Performance Pass
- [ ] Increase base font size/line-height beyond "authentic" Win98 density
- [ ] Check color contrast ratios against WCAG AA
- [ ] Full keyboard-only navigation test
- [ ] Test with screen reader on key flows (nav, project list, contact form)
- [ ] Optimize/lazy-load images and screenshots
- [ ] Run Lighthouse audit, fix major flags
- [ ] Cross-browser check (Chrome, Firefox, Safari)
- [ ] Real mobile device test (not just devtools resize) — nav, windows layout, ASCII cam

## Phase 7 — Launch
- [ ] Point custom domain at Vercel via DNS
- [ ] Verify HTTPS + domain resolves correctly
- [ ] Final proofread of all copy
- [ ] Test resume PDF download
- [ ] Test contact method end-to-end
- [ ] Share link for outside feedback (friend/mentor) before wide distribution
- [ ] Add link to LinkedIn, GitHub profile, CV

---

## Nice-to-haves (post-launch, if time allows)
- [ ] Blog/notes window (SDG-tech interests, LeetCode learnings)
- [ ] Dark/light theme toggle (reuse pattern from EcoDex)
- [ ] Simple privacy-respecting analytics (Plausible or similar)
- [ ] CI/CD polish — GitHub Actions lint/build check before Vercel deploy (portfolio piece for your DevOps goal)
