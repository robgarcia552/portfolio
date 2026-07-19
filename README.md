# Robert Garcia — Portfolio

A single-page portfolio site for Robert Garcia, a Software Engineer based in Miami, FL. Built with Next.js, React, and Tailwind CSS.

## Sections

- **Hero (About)** — Introduction and call-to-action
- **Skills** — Ruby on Rails, agentic workflows, prompt engineering, databases & backend
- **Experience** — Background summary and eCornell Machine Learning & AI certificate
- **Contact** — Message form

## Tech Stack

- [Next.js](https://nextjs.org) 16 (App Router)
- [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4
- TypeScript

## Getting Started

Install dependencies and run the dev server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Scripts

- `pnpm dev` — Start the development server
- `pnpm build` — Build for production
- `pnpm start` — Run the production build
- `pnpm lint` — Run ESLint

## Project Structure

```
app/
  layout.tsx      # Root layout
  page.tsx         # Page sections (hero, skills, experience, contact)
  globals.css       # Global styles and design tokens
components/
  site-header.tsx   # Fixed navigation
```
