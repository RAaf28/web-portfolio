# Web Portfolio — Architecture Reference

Technical reference for Phase 2 ("Project Scaffold") of `plan.md`. Read this before starting the scaffold, not while mid-build.

---

## Framework & rendering strategy
**Next.js (App Router) + static generation.** Nearly all content (bio, projects, skills) is author-controlled, not dynamic data — pre-build at deploy time via static export where possible. Fast, free-tier friendly on Vercel, no database needed. The ASCII camera feature is the one exception — it's entirely client-side (browser APIs only), so it doesn't change this decision.

## Folder structure
```
/app
  /page.tsx                → desktop shell (renders windows + taskbar)
  /not-found.tsx           → themed BSOD-style 404 page
/components
  /os                      → Window, TitleBar, Taskbar, StartMenu, Desktop
  /sections                → Bio, Projects, Skills, Experience, Contact
  /ascii-cam               → CameraFeed, AsciiRenderer, PermissionFallback
/lib
  /content.ts              → typed content: projects, skills, experience
  /ascii.ts                → brightness→char mapping, canvas processing logic
/public
  /screenshots, /resume.pdf, /favicon, /og-image.png
```

## Content as data, not hardcoded JSX
Keep project/skill/experience content in typed structured data, not scattered inline in components:

```ts
type Project = {
  slug: string; name: string; blurb: string;
  stack: string[]; role: string; links: { github?: string; demo?: string };
  screenshots: string[];
};
```

Why: keeps "window" components dumb/reusable (they render whatever data they're given), and means future content edits (new project, updated bio) never touch layout code.

## Window/desktop state
The one real piece of client state on the site: which windows are open, focused, minimized, z-order. No need for Redux/Zustand — a single `useReducer` or a lightweight `DesktopProvider` context holding `{ windows: [{id, isOpen, isMinimized, zIndex}] }` is enough. Keep it simple; this is the part most likely to get over-engineered.

## ASCII camera — isolate it hard
Self-contained module, no dependency on the rest of the app:
- `AsciiCamera` component owns its own local state (`permission: 'idle'|'granted'|'denied'`, `frame` data)
- Canvas/pixel logic lives in a plain `.ts` utility (`lib/ascii.ts`) — testable, swappable, not tangled into React render logic
- Guard with `'use client'` and a dynamic import (`next/dynamic`, `ssr: false`) since `getUserMedia`/canvas don't exist server-side — also keeps this heavier code out of the initial bundle until the window is opened

## Mobile: separate layout, not a breakpoint hack
Branch at the component level: a `useMediaQuery`-driven check renders either `<DesktopShell>` (windows/taskbar) or `<MobileShell>` (stacked sections). Both read from the same `lib/content.ts` — no content duplication, just different layout.

## Styling
Tailwind — utility classes make it fast to consistently hit the Phase 1 spacing/type scale across many small "window chrome" pieces (title bars, borders, buttons) without hand-rolling CSS per component.

## Deployment
Git push → Vercel auto-deploy. No backend/API routes needed unless the contact form requires one — if so, keep it to a single `route.ts` forwarding to a service (Resend/Formspree) rather than building a full backend.
