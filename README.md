# Debarpan Dey — Portfolio

A single-page portfolio site for **Debarpan Dey**, Senior UI-UX Designer (Kolkata, India).

The whole site is locked to the viewport — only the works list inside the card scrolls. Everything is static, server-rendered, and ready to deploy on Vercel with zero config.

---

## Tech stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **TypeScript**
- **CSS Modules** (no Tailwind, no UI library)
- **Google Fonts** via `next/font/google`:
  - **Geist** — body, headings, everything by default
  - **Newsreader** (500, italic) — used only for *Crafting Interfaces.*

---

## Getting started

```bash
# install
npm install

# run the dev server
npm run dev          # → http://localhost:3000

# production build
npm run build
npm run start
```

Node 18.18+ is required by Next 16.

---

## Project structure

```
debarpan-dey/
├── app/
│   ├── layout.tsx          Root layout — loads Geist + Newsreader, sets metadata
│   ├── page.tsx            Server component — left column (info, skills, footer)
│   ├── WorksPanel.tsx      Client component — the scrollable works card
│   ├── page.module.css     All component styles
│   └── globals.css         Reset + base body styles + custom scrollbar
├── public/                 Static assets (icons, images)
├── next.config.mjs
├── tsconfig.json
└── package.json
```

### Where things live

| What you want to edit          | File                                       |
| ------------------------------ | ------------------------------------------ |
| Name, tagline, contact info    | `app/page.tsx`                             |
| Skill pills                    | `app/page.tsx` (`skills` array)            |
| Projects list                  | `app/WorksPanel.tsx` (`projects` array)    |
| Project link URLs              | `app/WorksPanel.tsx` (`url` field per item)|
| Colors / spacing / typography  | `app/page.module.css`                      |
| Body background / font setup   | `app/globals.css`, `app/layout.tsx`        |

---

## Design notes

- **Background:** `#1A1A1A` — applied to both the page and the card so the fade overlays blend seamlessly.
- **Marker (▷):** static — pinned next to the first project (`Tata Tiscon`) via `top` in `.marker`.
- **Scroll fades:** two 91px `linear-gradient` overlays inside `.scrollWrap` (`.fadeTop`, `.fadeBottom`), `pointer-events: none`, so content fades into the card edges as it scrolls.
- **First/last row padding:** extra `paddingTop` on the first row and `paddingBottom` on the last row push them clear of the fade overlays at rest.
- **Figma pill** is hardcoded as the active state — the rest are visual chips.

---

## Deploy

### Vercel (recommended)

```bash
npx vercel        # first deploy
npx vercel --prod # ship to production
```

Or push the repo to GitHub and import it in the Vercel dashboard — no env vars, no build config needed.

### Anywhere else

`npm run build` produces a fully static-ready Next.js output. Self-host with `npm run start`, or adapt to your platform of choice.

---

## Adding a new project

In `app/WorksPanel.tsx`, append to the `projects` array:

```ts
{
  name: "New Client",
  url: "https://newclient.com",
  role: "Website Design",
  duration: "2 Months",
  blurb: "Short one-line description of the client.",
  detail: "Notes on the brief / design approach.",
},
```

Use `\n` inside `duration` to split it across lines (e.g. `"03 Weeks\n+1 Week"`).
