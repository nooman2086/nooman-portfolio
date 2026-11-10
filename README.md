# Architect Portfolio

A responsive, accessible, SEO-ready portfolio site for an Enterprise Solution & Transformation Architect.
Built with React 18, TypeScript, Tailwind CSS 3 and Vite. It builds to static files and deploys to Cloudflare Pages.

## Quick start

Requires Node.js 18.18 or newer (`.nvmrc` pins 22).

```bash
npm install
npm run dev        # local dev server at http://localhost:5173
npm run build      # type-check, then build to ./dist
npm run preview    # serve the production build locally
```

Run the dev server on your own machine only. Do not expose it to a network (Vite 5's dev server has a known advisory
that does not affect the built static site).

## Before you publish: fill in the placeholders

Everything in `[square brackets]` is a placeholder.

| What | Where |
|---|---|
| Name, headline, location, focus tags | `src/data/site.ts` → `profile` |
| CV download button | Put `cv.pdf` in `public/`, then set `resumeUrl: '/cv.pdf'` in `profile` |
| Career timeline | `src/data/site.ts` → `timeline` |
| Capability map | `src/data/site.ts` → `capabilities` |
| Case studies | `src/data/site.ts` → `caseStudies` |
| Reference projects | `src/data/site.ts` → `referenceProjects` |
| Roadmap | `src/data/site.ts` → `roadmap` |
| Certifications and credential links | `src/data/site.ts` → `certifications` |
| Articles and posts | `src/data/site.ts` → `articles` (section appears once you add entries) |
| Email and LinkedIn | `src/data/site.ts` → `contact` |
| Site URL, page title, description, LinkedIn for search engines | `src/data/seo.json` |
| Social preview image | Replace `public/og-image.png` (1200 × 630 px) |
| Favicon | Replace `public/favicon.svg` |
| Colours | CSS variables at the top of `src/index.css` (light and dark) |
| Navigation order | `src/data/site.ts` → `nav`, and the order in `src/App.tsx` |

You do not need to edit components to update content.

## Adding a case study

Add an object to `caseStudies` in `src/data/site.ts`:

```ts
{
  id: 'unique-slug',
  title: 'Short descriptive title',
  industry: 'Manufacturing',
  context: 'Anonymized customer description.',
  role: 'What you actually did.',
  status: ['Proposed', 'Designed'],   // Proposed | Designed | Implemented | Outcome verified
  problem: '...',
  approach: '...',
  stack: ['API gateway', 'PostgreSQL'],
  decisions: [{ decision: '...', tradeoff: '...' }],
  outcomes: null,                      // only add text once an outcome is verified
  lessons: '...',
  published: false,                    // true only with written permission to identify the customer
}
```

Content rules this site is designed to enforce:

- Label work by what it was. Use `Implemented` or `Outcome verified` only when true.
- Keep customers anonymous. Do not publish names, logos, pricing or confidential diagrams without written permission.
- Keep `outcomes: null` until a result is verified.
- Cases containing `[placeholder]` text automatically show an "In preparation" badge. Remove the brackets when finished.
- This site does not advertise services for hire. If you later add a consulting page, first confirm your employer's
  moonlighting, conflict-of-interest, non-solicitation and IP terms.

## Project structure

```
index.html              HTML shell with SEO tokens filled from seo.json at build time
vite.config.ts          Vite config plus a small plugin for SEO tags, robots.txt and sitemap.xml
tailwind.config.js      Design tokens mapped to CSS variables
public/                 Static files copied as-is (favicon, og-image, _headers, theme-init.js)
src/data/site.ts        All page content
src/data/seo.json       Site URL, title, description (feeds meta tags, JSON-LD, sitemap, robots)
src/types.ts            Types for the content, including credibility status labels
src/components/         One component per section
src/hooks/              Theme toggle and active-section tracking
```

## SEO

- Title, description, canonical URL, Open Graph and Twitter tags are generated from `src/data/seo.json`.
- `schema.org/Person` structured data (JSON-LD) is added automatically. Add `linkedinUrl` in `seo.json` to include it.
- `robots.txt` and `sitemap.xml` are generated at build time from `siteUrl`.
- After deploying, update `siteUrl` to your real address and redeploy. Then submit the sitemap in Google Search Console.
- This is a single-page site, so the page is pre-rendered HTML shell plus client-side rendering. Search engines render
  JavaScript, but if you want fully pre-rendered HTML later, move to a static-site framework such as Astro or Next.js
  static export. The content file and components port across easily.

## Accessibility

- Skip-to-content link, landmark regions, one `h1`, and sequential heading levels.
- Visible keyboard focus, keyboard-operable menu (Escape closes it), `aria-current` on the active section.
- Case studies use native `<details>` disclosure, so they work with keyboard and screen readers.
- Status is always conveyed in text, never by colour alone. The architecture diagram has a title and description.
- Light and dark themes honour the system setting and a saved choice. `prefers-reduced-motion` is respected.
- Text colours were chosen for WCAG AA contrast in both themes. Re-check if you change the palette.

## Deploy to Cloudflare Pages

### Option A: Git integration (recommended)

1. Push this folder to a GitHub or GitLab repository.
2. In the Cloudflare dashboard, go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select the repository and set:
   - **Framework preset:** Vite (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variable:** `NODE_VERSION` = `22`
4. Select **Save and Deploy**. Every push to the production branch redeploys. Other branches get preview URLs.

### Option B: Direct upload with Wrangler

```bash
npm install
npm run build
npx wrangler login
npx wrangler pages project create your-project-name --production-branch main
npx wrangler pages deploy dist --project-name your-project-name
```

Re-run the last two commands (build and deploy) for each update.

### Option C: Direct upload in the dashboard

Run `npm run build`, then in **Workers & Pages** → **Create application** → **Pages** → **Upload assets**, upload the
`dist` folder.

### After the first deploy

1. Note your `*.pages.dev` address, set it as `siteUrl` in `src/data/seo.json`, and redeploy.
2. **Custom domain:** open the project → **Custom domains** → **Set up a custom domain**, and follow the DNS steps.
   Update `siteUrl` to match.
3. Check the security headers: `public/_headers` sets a strict Content-Security-Policy, frame blocking and long-lived
   caching for hashed assets. If you add analytics, fonts from a CDN, or embeds, extend the policy in that file.
4. Share the link on LinkedIn once to confirm the preview image renders. LinkedIn's Post Inspector can refresh its cache.

## Updating dependencies

```bash
npm outdated
npm update
npm run build
```

Tailwind is pinned to v3 for stable configuration. Review upstream migration guides before moving to a new major version.

## Troubleshooting

| Symptom | Fix |
|---|---|
| Build fails on Cloudflare with a Node error | Set `NODE_VERSION` to `22` in the project's environment variables |
| Page is unstyled after changing CSS | Restart `npm run dev`, then clear the Vite cache with `rm -rf node_modules/.vite` |
| Social preview shows the old image | Replace `public/og-image.png`, redeploy, then refresh the cache with the platform's debugger |
| Fonts blocked by CSP | Fonts are self-hosted via `@fontsource`. If you switch to a font CDN, add its host to `font-src` and `style-src` in `public/_headers` |
